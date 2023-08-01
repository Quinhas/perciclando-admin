import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { buttonClass } from '../../components/Button/styles';
import { Input } from '../../components/Form/Input';
import { useSignInController } from './useSignInController';

export function SignIn() {
  const { register, handleSubmit, errors, isLoading } = useSignInController();

  return (
    <>
      <header className='flex flex-col items-center'>
        <h1 className='leading text-4xl font-bold tracking-[-1px] text-primary-500'>
          Entrar
        </h1>
      </header>
      <main className='flex w-full flex-col items-center gap-2'>
        <div className='flex w-full flex-grow flex-col items-center justify-center gap-4'>
          <form
            className='mt-[60px] flex w-full flex-col gap-2'
            onSubmit={handleSubmit}
          >
            <Input
              {...register('username')}
              error={errors.username?.message}
              type='text'
              placeholder='Nome de Usuário'
            />
            <Input
              {...register('password')}
              error={errors.password?.message}
              type='password'
              placeholder='Senha'
            />

            <Link
              to='/forgot-password'
              className={buttonClass({
                colorScheme: 'primary',
                variant: 'link',
                disabled: isLoading || true,
                className: 'w-auto justify-end text-sm',
              })}
            >
              Esqueci minha senha
            </Link>

            <Button
              type='submit'
              className='mt-4'
              isLoading={isLoading}
              colorScheme='primary'
              variant='solid'
            >
              Entrar
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}

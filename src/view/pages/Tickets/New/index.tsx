import { Button } from '../../../components/Button';
import { Input } from '../../../components/Form/Input';
import { useNewTicketController } from './useNewTicketController';

export default function NewTicket() {
  const { register, errors, handleSubmit, isLoading } =
    useNewTicketController();

  return (
    <div className='flex h-full w-full min-w-[17rem] flex-grow flex-col gap-5 rounded-lg bg-white p-6 shadow dark:bg-gray-800'>
      <div>
        <h2 className='text-3xl font-bold'>Novo Ingresso</h2>
      </div>
      <div className='flex flex-grow'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-grow flex-col justify-around gap-4'
        >
          <Input
            {...register('number')}
            error={errors.number?.message}
            type='number'
            placeholder='Número do Ingresso'
          />
          <Input
            {...register('name')}
            error={errors.name?.message}
            type='text'
            placeholder='Nome'
          />

          <Button
            type='submit'
            colorScheme='primary'
            isLoading={isLoading}
          >
            Gerar Ingresso
          </Button>
        </form>
      </div>
    </div>
  );
}

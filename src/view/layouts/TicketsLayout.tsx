import { Link, Outlet } from 'react-router-dom';
import { Button } from '../components/Button';

export function TicketsLayout() {
  return (
    <div className='flex flex-grow justify-center p-4'>
      <div className='mx-auto flex min-h-full w-full flex-col justify-center gap-1 sm:flex-row'>
        <div className='w-full min-w-[17rem] rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:w-[17rem]'>
          <div className='flex flex-col gap-2'>
            <Link to='/tickets'>
              <Button colorScheme='blue'>Ingressos</Button>
            </Link>
            <Link to='/tickets/new'>
              <Button colorScheme='blue'>Criar Ingresso</Button>
            </Link>
            <Link to='/tickets/validate'>
              <Button colorScheme='blue'>Ler QR Code</Button>
            </Link>
          </div>
        </div>
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

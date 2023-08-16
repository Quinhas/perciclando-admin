import { Check, QrCode, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Spinner } from '../../components/Spinner';
import { useTicketsController } from './useTicketsController';

export default function Tickets() {
  const { tickets, isFetching, isError } = useTicketsController();

  if (isFetching) {
    return (
      <div className='flex h-full w-full min-w-[17rem] flex-grow flex-col items-center justify-center gap-5 rounded-lg bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
        <Spinner />
      </div>
    );
  }

  if (tickets === undefined || isError) {
    return (
      <div>
        <h1>Oops!</h1>
        <p>
          Não foi possível recuperar as informações desejadas. Tente novamente.
        </p>
      </div>
    );
  }

  return (
    <div className='flex h-full w-full min-w-[17rem] flex-grow flex-col gap-5 rounded-lg bg-white p-6 shadow dark:bg-gray-800'>
      <div>
        <h2 className='text-3xl font-bold'>Ingressos</h2>
        <p className='text-sm font-light text-gray-500'>
          {tickets.length} vendidos
        </p>
      </div>
      <div className='flex flex-1'>
        <div className='relative w-full overflow-x-auto'>
          <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Nº
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Nome
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Criador
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Validado
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                ></th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'
                >
                  <td className='px-6 py-4 '>
                    {String(ticket.number).padStart(3, '0')}
                  </td>
                  <td className='px-6 py-4'>{ticket.name}</td>
                  <td className='px-6 py-4'>{ticket.createdBy?.username}</td>
                  <td className='px-6 py-4'>
                    {ticket.validatedAt ? (
                      <Check className='text-green-500 dark:text-green-300' />
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className='flex gap-1'>
                    <Link to={`/tickets/${ticket.id}`}>
                      <Button
                        size='sm'
                        colorScheme='primary'
                        variant={'ghost'}
                        title='Ver Ingresso'
                      >
                        <QrCode strokeWidth={1.5} />
                      </Button>
                    </Link>
                    <Button
                      size='sm'
                      colorScheme='red'
                      variant={'ghost'}
                      title='Excluir Ingresso'
                      className='w-auto'
                    >
                      <Trash2 strokeWidth={1.5} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { Check, Share2 } from 'lucide-react';
import QRCode from 'react-qr-code';
import { Button } from '../../../components/Button';
import { LogoIcon } from '../../../components/LogoIcon';
import { Spinner } from '../../../components/Spinner';
import { useTicketDetailsController } from './useTicketDetailsController';

export function TicketDetails() {
  const {
    ticket,
    isFetching,
    isError,
    handleShareTicket,
    hideButtons,
    cardRef,
  } = useTicketDetailsController();

  if (isFetching) {
    return (
      <div className='p-0 sm:p-4'>
        <div className='aspect-[3/4] h-full w-full flex-grow gap-5 rounded-lg bg-green-500 text-green-900 shadow sm:w-[364px] md:min-w-0'>
          <div className='p-5'>
            <h3 className='text-2xl font-semibold leading-none tracking-tight'>
              Perciclando - 10 Anos
            </h3>
            <p className='text-muted-foreground text-sm text-green-700'>
              Ingresso #---
            </p>
          </div>
          <div className='p-5'>
            <div className='flex aspect-square w-full flex-col items-center justify-center gap-4 rounded border-2 border-solid border-green-600 p-2'>
              <div className='mx-auto flex aspect-square w-[256px] items-center justify-center rounded'>
                <Spinner />
              </div>
              <p className='text-center font-light'>-</p>
            </div>
          </div>
          <div className='flex items-center justify-center p-5'>
            <LogoIcon className='h-11 w-11' />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !ticket) {
    return (
      <div className='p-0 sm:p-4'>
        <div className='aspect-[3/4] h-full w-full flex-grow gap-5 rounded-lg bg-green-500 text-green-900 shadow sm:w-[364px] md:min-w-0'>
          Erro
        </div>
      </div>
    );
  }

  return (
    <div
      className=' p-0 sm:p-4'
      ref={cardRef}
    >
      <div className='relative aspect-[3/4] h-full w-full flex-grow gap-5 rounded-lg bg-green-500 text-green-900 shadow sm:w-[364px] md:min-w-0'>
        <div className='p-5'>
          <h3 className='text-2xl font-semibold leading-none tracking-tight'>
            Perciclando - 10 Anos
          </h3>
          <p className='text-muted-foreground text-sm text-green-700'>
            Ingresso #{String(ticket.number).padStart(3, '0')}
          </p>
        </div>
        <div className='p-5'>
          <div className='flex aspect-square w-full flex-col items-center justify-center gap-4 rounded border-2 border-solid border-green-600 p-2'>
            <QRCode
              value={`${ticket.id}`}
              className='mx-auto aspect-square w-[256px] rounded'
            />
            <p className='text-center font-light'>{ticket?.name}</p>
          </div>
        </div>
        <div className='flex items-center justify-center p-5'>
          <LogoIcon className='h-11 w-11' />
        </div>
        {!hideButtons && (
          <>
            <Button
              onClick={() => {}}
              title='Validar Ingresso'
              colorScheme='gray'
              variant='ghost'
              size='sm'
              className='absolute bottom-2 left-2 aspect-square w-auto p-1 text-green-900 dark:text-green-900'
            >
              <span className='sr-only'>Validar Ingresso</span>
              <Check className='h-4 w-auto' />
            </Button>

            <Button
              onClick={() => handleShareTicket()}
              title='Compartilhar Ingresso'
              colorScheme='gray'
              variant='ghost'
              size='sm'
              className='absolute bottom-2 right-2 aspect-square w-auto p-1 text-green-900 dark:text-green-900'
            >
              <span className='sr-only'>Compartilhar Ingresso</span>
              <Share2 className='h-4 w-auto' />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

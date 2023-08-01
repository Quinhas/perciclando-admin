import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Camera, CheckCircle2, XCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../../components/Button';
import { Select } from '../../../components/Form/Select';
import { useValidateTicketController } from './useValidateTicketController';

export default function ValidateTicket() {
  const {
    cameras,
    selectedCamera,
    isScanning,
    startCamera,
    stopCamera,
    result,
    isAlertDialogOpen,
    setIsAlertDialogOpen,
    isLoading,
    setSelectedCamera,
  } = useValidateTicketController();

  return (
    <>
      <div className='flex h-full w-full min-w-[17rem] flex-grow flex-col gap-5 rounded-lg bg-white p-6 shadow dark:bg-gray-800'>
        <div>
          <h2 className='text-3xl font-bold'>Validar Ingresso</h2>
        </div>
        <div className='flex w-full flex-grow'>
          <div
            className={twMerge(
              'flex h-full w-full flex-grow flex-col justify-between',
              isScanning ? '' : 'rounded',
            )}
          >
            <div
              className={twMerge(
                'flex aspect-square w-full flex-grow justify-center overflow-hidden rounded bg-zinc-950/5 p-8 dark:bg-zinc-50/5',
                isScanning ? 'hidden' : '',
              )}
            >
              <Camera className='aspect-square h-full w-full flex-grow text-zinc-950/70 dark:text-zinc-50/70' />
            </div>
            <div
              id='reader'
              className={twMerge(
                'aspect-square max-h-full w-auto max-w-full overflow-hidden rounded border-none',
                isScanning ? '' : 'hidden',
              )}
            ></div>
            <Select
              placeholder='Camera'
              name='camera'
              value={selectedCamera}
              onChange={(ev) => setSelectedCamera(ev.target.value)}
              disabled={isScanning}
            >
              {cameras?.map((camera) => (
                <option
                  key={camera.id}
                  value={camera.id}
                >
                  {camera.label}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          {!isScanning && (
            <Button
              variant='solid'
              colorScheme='green'
              onClick={() => startCamera()}
              disabled={cameras?.length === 0 || !selectedCamera}
              isLoading={isLoading}
            >
              Iniciar Câmera
            </Button>
          )}
          {isScanning && (
            <Button
              variant='solid'
              colorScheme='red'
              onClick={() => stopCamera()}
              isLoading={isLoading}
            >
              Parar Câmera
            </Button>
          )}
        </div>
      </div>
      <AlertDialog.Root
        open={isAlertDialogOpen}
        onOpenChange={setIsAlertDialogOpen}
      >
        <AlertDialog.Portal>
          <AlertDialog.Overlay className='data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-zinc-50/80 backdrop-blur-sm dark:bg-zinc-950/80' />
          <AlertDialog.Content className='data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 flex w-[90%] max-w-lg translate-x-[-50%] translate-y-[-50%] flex-col gap-8 rounded border border-zinc-100 bg-zinc-50 p-6 text-zinc-950 shadow-lg transition-colors duration-200 ease-in dark:border-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 sm:rounded-lg md:w-full'>
            <div className='flex flex-col space-y-2 text-center sm:text-left'>
              <p className='text-5xl font-semibold'>
                {result?.status === 'success' ? 'Oba!' : 'Epa!'}
              </p>
            </div>
            {result?.status === 'success' && (
              <div className='flex flex-col items-center gap-2 text-green-500 dark:text-green-300'>
                <CheckCircle2 className='h-auto w-48 text-green-500 dark:text-green-300' />
                <p>{result?.message}</p>
              </div>
            )}
            {result?.status !== 'success' && (
              <div className='flex flex-col items-center gap-2 text-red-500 dark:text-red-300'>
                <XCircle className='h-auto w-48' />
                <p>{result?.message}</p>
              </div>
            )}
            <div className='flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2'>
              <Button
                colorScheme='blue'
                variant='outline'
                onClick={() => setIsAlertDialogOpen(false)}
              >
                Voltar
              </Button>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
}

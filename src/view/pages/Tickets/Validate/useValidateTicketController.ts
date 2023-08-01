import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { CameraDevice, Html5Qrcode } from 'html5-qrcode';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  ValidateTicketRequest,
  ticketsService,
} from '../../../../app/services/ticketsService';

interface Result {
  status: 'success' | 'error';
  message: string;
}

export function useValidateTicketController() {
  const [cameras, setCameras] = useState<CameraDevice[]>();
  const [selectedCamera, setSelectedCamera] = useState<string>();
  const [scanner, setScanner] = useState<Html5Qrcode>();
  const [isScanning, setIsScanning] = useState(false);
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [result, setResult] = useState<Result>();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: ValidateTicketRequest) => {
      return ticketsService.validate({ id: data.id });
    },
  });

  const getCameras = useCallback(async () => {
    const cameras = await Html5Qrcode.getCameras();
    console.log(cameras);

    if (cameras.length <= 0) {
      toast.error('Câmera não encontrada. Tente novamente.');
      return;
    }

    setCameras(cameras);
    setSelectedCamera(cameras[0].id);
  }, []);

  useEffect(() => {
    void getCameras().then(() => {
      const scanner: Html5Qrcode = new Html5Qrcode('reader');
      setScanner(scanner);
    });
  }, [getCameras]);

  async function onSuccess(result: string) {
    try {
      await stopCamera();
      await mutateAsync({ id: result });
      setResult({
        status: 'success',
        message: 'Ingresso validado com sucesso.',
      });
    } catch (error) {
      const message =
        isAxiosError<{ error: string; message: string }>(error) &&
        error.response
          ? error.response.data.message
          : 'Não foi possível criar o ingresso.';
      setResult({
        status: 'error',
        message,
      });
    } finally {
      setIsAlertDialogOpen(true);
    }
  }

  function onError(err: string) {
    console.log(err);
  }

  async function startCamera() {
    if (!scanner) {
      toast.error('Scanner não encontrado. Tente novamente.');
      return;
    }

    if (scanner.isScanning) {
      await scanner.stop();
      console.log('teste');
    }

    if (!selectedCamera) {
      toast.error('Nenhuma câmera selecionada. Tente novamente.');
      return;
    }

    setIsScanning(true);

    await scanner.start(
      { deviceId: selectedCamera },
      { fps: 10, aspectRatio: 1 },
      onSuccess,
      onError,
    );
  }

  async function stopCamera() {
    await scanner?.stop();
    setIsScanning(false);
  }

  return {
    cameras,
    selectedCamera,
    startCamera,
    stopCamera,
    isScanning,
    result,
    isAlertDialogOpen,
    setIsAlertDialogOpen,
    isLoading,
  };
}

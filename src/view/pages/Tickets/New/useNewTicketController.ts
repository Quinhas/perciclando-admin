import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import {
  CreateTicketRequest,
  ticketsService,
} from '../../../../app/services/ticketsService';

const schema = z.object({
  number: z.coerce.number().min(0).max(500),
  name: z.string().nonempty(),
});

type FormData = z.infer<typeof schema>;

export function useNewTicketController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: CreateTicketRequest) => {
      return ticketsService.create(data);
    },
  });

  const navigate = useNavigate();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
      toast.success('Ingresso criado com sucesso!');
      navigate('/tickets');
    } catch (error) {
      const message =
        isAxiosError<{ error: string; message: string }>(error) &&
        error.response
          ? error.response.data.message
          : 'Não foi possível criar o ingresso.';
      toast.error(message);
    }
  });

  return { register, errors, handleSubmit, isLoading };
}

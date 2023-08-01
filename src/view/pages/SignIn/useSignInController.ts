import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { useAuth } from '../../../app/hooks/useAuth';
import { SignInRequest, authService } from '../../../app/services/authService';

const schema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty().min(8),
});

type FormData = z.infer<typeof schema>;

export function useSignInController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignInRequest) => {
      return authService.signIn(data);
    },
  });

  const { signIn } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      toast.success('Signed in!');
      signIn({ accessToken });
    } catch (error) {
      const message =
        isAxiosError<{ error: string; message: string }>(error) &&
        error.response
          ? error.response.data.message
          : 'Unable to sign up.';
      toast.error(message);
    }
  });

  return { register, errors, handleSubmit, isLoading };
}

import { useQuery } from '@tanstack/react-query';
import { ticketsService } from '../../../app/services/ticketsService';

export function useTicketsController() {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['tickets'],
    queryFn: async () => ticketsService.getAll(),
  });

  return { tickets: data, isError, isFetching };
}

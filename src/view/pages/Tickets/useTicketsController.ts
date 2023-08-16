import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { ticketsService } from '../../../app/services/ticketsService';

export function useTicketsController() {
  const { data, isError, isFetching } = useQuery({
    queryKey: ['tickets'],
    queryFn: async () => ticketsService.getAll(),
  });

  const tickets = useMemo(() => {
    return data?.sort((a, b) => a.number - b.number);
  }, [data]);

  return { tickets, isError, isFetching };
}

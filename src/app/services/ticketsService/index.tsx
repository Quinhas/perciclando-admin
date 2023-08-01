import { Ticket } from '../../entities/Ticket';
import { httpClient } from '../httpClient';

export interface CreateTicketRequest {
  name: string;
  number: number;
}

export interface GetTicketByIdRequest {
  id: string;
}

export interface ValidateTicketRequest {
  id: string;
}

export const ticketsService = {
  async getAll() {
    const { data } = await httpClient.get<Ticket[]>('/tickets');

    return data;
  },

  async getById({ id }: GetTicketByIdRequest) {
    const { data } = await httpClient.get<Ticket>(`/tickets/${id}`);

    return data;
  },

  async create(body: CreateTicketRequest) {
    const { data } = await httpClient.post<Ticket>('/tickets', body);

    return data;
  },

  async validate({ id }: ValidateTicketRequest) {
    await httpClient.post('/tickets/validate', {
      id,
    });
  },
};

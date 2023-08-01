export interface Ticket {
  id: string;
  name: string;
  number: number;
  createdBy?: {
    id: string;
    username: string;
  };
  validatedAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
}

import { Product } from './Product';
import StatusHTTP from './StatusHTTP';

export type Order = {
  id: number;
  userId: number;
  productIds?: number[] | Product[] ;
};

export type OrderResponse = {
  status: keyof typeof StatusHTTP,
  data: Order
};

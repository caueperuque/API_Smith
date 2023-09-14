import StatusHTTP from './StatusHTTP';

export type Product = {
  id: number;
  name: string;
  price: string;
  orderId?: number;
};

export type ProductResponse<T> = {
  status: keyof typeof StatusHTTP;
  data: T | T[];
};

export type ProductRequest = {
  id?: number;
  name?: string;
  price?: string;
  orderId?: number;
  message?: string
};

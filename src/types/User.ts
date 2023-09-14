import StatusHTTP from './StatusHTTP';

export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
};

export type UserToken = {
  token?: string;
  message?: string;
};

export type UserResponse<T> = {
  status: keyof typeof StatusHTTP;
  data?: T | T[];
};

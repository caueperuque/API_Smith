import StatusHTTP from '../types/StatusHTTP';

export = (status: keyof typeof StatusHTTP): number => StatusHTTP[status];
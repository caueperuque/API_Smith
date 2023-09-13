import { RequestHandler } from 'express';
import orderService from '../services/order.service';
// import mapStatus from '../utils/mapStatus';

const getAllOrders: RequestHandler = async (_req, res) => {
  const orders = await orderService.getAllOrders();

  res.status(200).json(orders);
};

export default {
  getAllOrders,
};
import { Router } from 'express';
import orderController from '../controllers/order.controller';

const route = Router();

route.get('/', orderController.getAllOrders);

export default route;
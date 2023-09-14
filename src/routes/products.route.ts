import { Router } from 'express';
import productController from '../controllers/product.controller';
import middleware from '../middlewares/products.middleware';

const route = Router();

route.get('/', productController.getAllProducts);
route.post(
  '/',
  middleware.validationInputName,
  middleware.validationInputPrice,
  productController.createProduct,
);

export default route;
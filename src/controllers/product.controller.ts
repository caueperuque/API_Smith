import { RequestHandler } from 'express';
import productService from '../services/product.service';
import mapStatus from '../utils/mapStatus';

const getAllProducts: RequestHandler = async (_req, res) => {
  const products = await productService.getAllProducts();

  res.status(200).json(products);
};

const createProduct: RequestHandler = async (req, res) => {
  const product = await productService.createProduct(req.body);

  res.status(mapStatus(product.status)).json(product.data);
};

export default {
  getAllProducts,
  createProduct,
};
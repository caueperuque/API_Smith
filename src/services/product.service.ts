import { Product, ProductResponse } from '../types/Product';
import ProductModel from '../database/models/product.model';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await ProductModel.findAll();

  // if (!products) return ({ message: 'NOT_FOUND' })

  return products.map((product) => product.toJSON());
};

const createProduct = async (dataProduct: Product): Promise<ProductResponse> => {
  const product = (await ProductModel.create(dataProduct));

  const { orderId, ...data } = product.toJSON();

  if (!product) return ({ status: 'BAD_REQUEST', data: product });

  return { status: 'CREATED', data };
};

export default {
  getAllProducts,
  createProduct,
};
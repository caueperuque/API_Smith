import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

const getAllOrders = async (): Promise<Order[]> => {
  const orders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });

  const data = orders.map((order) => {
    const dataOrder = order.toJSON();
    const arrayIds = dataOrder.productIds?.map((id) => (typeof id === 'object' ? id.id : id));

    dataOrder.productIds = arrayIds;
    return dataOrder;
  });

  return data;
};

export default {
  getAllOrders,
};
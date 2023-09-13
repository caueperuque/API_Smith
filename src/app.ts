import express from 'express';
import productRoute from './routes/products.route';
import orderRoute from './routes/orders.route';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/orders', orderRoute);

export default app;

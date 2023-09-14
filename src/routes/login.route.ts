import { Router } from 'express';
import loginController from '../controllers/login.controller';
import middlewares from '../middlewares/login.middleware';

const route = Router();

route.post('/', middlewares.verifyInputLogin, loginController.login);

export default route;
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import authJwt from '../utils/generateToken';
import { User, UserResponse, UserToken } from '../types/User';
// import generateToken from '';

const login = async (user: User): Promise<UserResponse<UserToken>> => {
  // const product = await ProductModel.create(dataProduct);

  // const { orderId, ...data } = product.toJSON();

  // if (!product) return ({ status: 'BAD_REQUEST', data: product });

  // return { status: 'CREATED', data };

  const data = await UserModel.findOne({
    where: { username: user.username },
  });
  
  if (data?.toJSON().password) {
    const { username, password } = data.toJSON();
    const verifyLogin = await bcrypt.compare(user.password, password);
    if (verifyLogin) {
      const token = authJwt.generateToken({ username });
      return ({ status: 'SUCESS', data: { token } });
    }
  }

  return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
};

export default {
  login,
};
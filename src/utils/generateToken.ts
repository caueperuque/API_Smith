import * as jwt from 'jsonwebtoken';
import envArgs from '../envArgs';
// import jwtSecret from '../envArgs';

type Payload = {
  username: string
};

const generateToken = (payload: Payload): string => {
  const token = jwt.sign(payload, envArgs.jwtSecret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

export default {
  generateToken,
};
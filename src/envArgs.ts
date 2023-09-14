const secret = process.env.JWT_SECRET || 'secret';

export default {
  jwtSecret: secret,
};

import { NextFunction, RequestHandler } from 'express';

const verifyInputLogin: RequestHandler = (req, res, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: '"username" and "password" are required' });
    }

    next(); 
  } catch (err) {
    res.status(500).json({ message: 'INTERNAL ERROR' });
  }
};

export default {
  verifyInputLogin,
};
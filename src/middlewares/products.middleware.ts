import { NextFunction, RequestHandler } from 'express';

const validationInputName: RequestHandler = (req, res, next: NextFunction) => {
  const { name } = req.body;

  try {
    if (!name) return res.status(400).json({ message: '"name" is required' });

    if (typeof name !== 'string') {
      return res.status(422).json({ message: '"name" must be a string' });
    }

    if (name.length <= 2) {
      return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    }

    next();
  } catch (err) {
    return res.status(500).json('INTERNAL ERROR');
  }
};

const validationInputPrice: RequestHandler = (req, res, next: NextFunction) => {
  const { price } = req.body;

  try {
    if (!price) return res.status(400).json({ message: '"price" is required' });

    if (typeof price !== 'string') {
      return res.status(422).json({ message: '"price" must be a string' });
    }

    if (price.length <= 2) {
      return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
    }

    next();
  } catch (err) {
    return res.status(500).json('INTERNAL ERROR');
  }
};

const validationInputOrderId: RequestHandler = (req, res, next: NextFunction) => {
  const { orderId } = req.body;

  try {
    if (!orderId) return res.status(400).json({ message: '"orderId" is required' });

    // if (typeof Number(orderId) !== 'number') {
    //   return res.status(422).json({ message: '"orderId" must be a number' });
    // }

    next();
  } catch (err) {
    return res.status(500).json('INTERNAL ERRORR');
  }
};

export default {
  validationInputName,
  validationInputPrice,
  validationInputOrderId,
};
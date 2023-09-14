import { RequestHandler } from 'express';
import loginService from '../services/login.service';
import mapStatus from '../utils/mapStatus';

const login: RequestHandler = async (req, res) => {
  // const { username, password } = req.body
  const account = await loginService.login(req.body);
  res.status(mapStatus(account.status)).json(account.data);
};

export default {
  login,
};
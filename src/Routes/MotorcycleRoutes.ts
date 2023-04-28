import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcyclesController(req, res, next).createOneMotorcycles(),
);

export default routes;
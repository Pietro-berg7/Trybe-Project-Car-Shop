import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createOneMotorcycles(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);
routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getMotorcycleById(),
);
routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycleById(),
);

export default routes;
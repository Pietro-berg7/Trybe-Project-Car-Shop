import express from 'express';

import CarRoutes from './Routes/CarRoutes';
import MotorcycleRoutes from './Routes/MotorcycleRoutes';
import GlobalErrorHandler from './Middlewares/GlobalErrorHandler';

const app = express();

app.use(express.json());

app.use(CarRoutes);
app.use(MotorcycleRoutes);

app.use(GlobalErrorHandler.handle);

export default app;

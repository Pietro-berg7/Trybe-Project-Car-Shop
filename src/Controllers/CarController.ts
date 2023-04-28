import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  constructor(
    private req: Request, 
    private res: Response, 
    private next: NextFunction, 
    private service: CarService = new CarService(),
  ) {}

  public async createOneCar() {
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar = this.req.body;

    try {
      const newCar = await this.service
        .createOneCar({ 
          id, 
          model,
          year,
          color,
          status,
          buyValue,
          doorsQty,
          seatsQty });
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;

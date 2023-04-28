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
      const newCar = await this.service.createOneCar({ 
        id, 
        model,
        year,
        color,
        status,
        buyValue,
        doorsQty,
        seatsQty, 
      });
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    try {
      const allCars = await this.service.getAllCars();
      if (allCars.length === 0) {
        return this.res.status(204).send();
      }
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarById() {
    try {
      const oneCarById = await this.service.getCarById(this.req.params.id);
      if (oneCarById) {
        return this.res.status(200).json(oneCarById);
      } 
      return this.res.status(204).send();
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;

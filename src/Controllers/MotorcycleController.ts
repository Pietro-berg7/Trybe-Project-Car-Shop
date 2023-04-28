import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcycleService';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async createOneMotorcycles() {
    try {
      const newMotorcycles = await this.service.createOneMotorcycles(this.req.body);
      
      return this.res.status(201).json(newMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;
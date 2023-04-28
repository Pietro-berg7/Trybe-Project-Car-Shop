import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle';
import AppError from '../Utils/AppError';

class MotorcyclesService {
  public async createOneMotorcycles(motorcycle: IMotorcycle) {
    const motorcyclesModel = new MotorcycleModel();
    const newMotorcycle = await motorcyclesModel.create(motorcycle);
    
    return new Motorcycle(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcyclesModel = new MotorcycleModel();
    const allMotorcycles = await motorcyclesModel.find();

    return allMotorcycles.map((motor) => new Motorcycle(motor));
  }

  public async getMotorcycleById(id: string) {
    if (id.length !== 24) {
      throw new AppError(422, 'Invalid mongo id');
    }
    const motorcyclesModel = new MotorcycleModel();
    const motorcycle = await motorcyclesModel.findById(id);

    if (!motorcycle) {
      throw new AppError(404, 'Motorcycle not found');
    }

    return new Motorcycle(motorcycle);
  }

  public async updateMotorcycleById(id: string, body: IMotorcycle) {
    const oneMotorcycleById = await this.getMotorcycleById(id);

    if (!oneMotorcycleById) {
      return null;
    }

    if (id.length !== 24) {
      throw new AppError(422, 'Invalid mongo id');
    }

    const motorcycleModel = new MotorcycleModel();
    const updatedMotorcycle = await motorcycleModel.update(id, body);

    if (updatedMotorcycle) {
      return new Motorcycle(updatedMotorcycle);
    }

    throw new AppError(500, 'Failed to update motorcycle');
  }
}

export default MotorcyclesService;
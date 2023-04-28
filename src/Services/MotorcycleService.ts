import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycles from '../Models/Motorcycle';
import AppError from '../Utils/AppError';

class MotorcyclesService {
  public async createOneMotorcycles(motorcycle: IMotorcycle) {
    const motorcyclesModel = new Motorcycles();
    const newMotorcycle = await motorcyclesModel.create(motorcycle);
    
    return new Motorcycle(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcyclesModel = new Motorcycles();
    const allMotorcycles = await motorcyclesModel.find();

    return allMotorcycles.map((motor) => new Motorcycle(motor));
  }

  public async getMotorcycleById(id: string) {
    if (id.length !== 24) {
      throw new AppError(422, 'Invalid mongo id');
    }
    const motorcyclesModel = new Motorcycles();
    const motorcycle = await motorcyclesModel.findById(id);

    if (!motorcycle) {
      throw new AppError(404, 'Motorcycle not found');
    }

    return new Motorcycle(motorcycle);
  }
}

export default MotorcyclesService;
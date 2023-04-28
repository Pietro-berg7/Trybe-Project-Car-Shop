import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycles from '../Models/Motorcycle';

class MotorcyclesService {
  public async createOneMotorcycles(motorcycle: IMotorcycle) {
    const motorcycles = new Motorcycles();
    const newMotorcycle = await motorcycles.create(motorcycle);
    
    return new Motorcycle(newMotorcycle);
  }
}

export default MotorcyclesService;
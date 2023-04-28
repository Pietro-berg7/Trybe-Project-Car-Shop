import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycles extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motor: IMotorcycle) {
    super(motor);
    this.category = motor.category;
    this.engineCapacity = motor.engineCapacity;
  }
}

export default Motorcycles;
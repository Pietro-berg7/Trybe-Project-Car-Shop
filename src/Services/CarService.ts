import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car';

class CarService {
  public async createOneCar(car: ICar): Promise<Car> {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return new Car(newCar);
  }
}

export default CarService;
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car';
import AppError from '../Utils/AppError';

class CarService {
  public async createOneCar(car: ICar): Promise<Car> {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);

    return new Car(newCar);
  }

  public async getAllCars() {
    const carModel = new CarModel();
    const allCars = await carModel.find();

    return allCars.map((car) => new Car(car));
  }

  public async getCarById(id: string) {
    if (id.length !== 24) {
      throw new AppError(422, 'Invalid mongo id');
    }

    const carModel = new CarModel();
    const car = await carModel.findById(id);

    if (!car) {
      throw new AppError(404, 'Car not found');
    }

    return new Car(car);
  }

  public async updateCarById(id: string, body: ICar) {
    const oneCarById = await this.getCarById(id);

    if (!oneCarById) {
      return null;
    }

    if (id.length !== 24) {
      throw new AppError(422, 'Invalid mongo id');
    }

    const carModel = new CarModel();
    const updatedCar = await carModel.update(id, body);

    if (updatedCar) {
      return new Car(updatedCar);
    }

    throw new AppError(500, 'Failed to update car');
  }
}

export default CarService;

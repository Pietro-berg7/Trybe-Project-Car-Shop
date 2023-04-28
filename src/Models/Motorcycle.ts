import { Schema, UpdateQuery } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });

    super(schema, 'Motorcycle');
  }

  public async find(): Promise<IMotorcycle[]> {
    return this.model.find();
  }  

  public async findById(id: string): Promise<IMotorcycle | null> {
    return this.model.findById(id);
  }

  public async update(id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<IMotorcycle>,
      { new: true },
    );
  }
}

export default Motorcycle;
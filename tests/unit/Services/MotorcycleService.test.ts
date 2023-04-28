import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { inputMotorcycle, arrayMockAllMotorcycle, outputMotorcycle } from '../MotorcyclesMock';

describe('Testando MotorcycleService', function () {
  it('Testando a função createOneMotorcycles', async function () {
    sinon.stub(Model, 'create').resolves(outputMotorcycle);

    const motorcycle = new Motorcycle(outputMotorcycle);
    const response = await new MotorcycleService().createOneMotorcycles(inputMotorcycle);

    expect(response).to.be.deep.equal(motorcycle);
  });

  it('Testando a função getAllMotorcycles', async function () {
    sinon.stub(Model, 'find').resolves(arrayMockAllMotorcycle);

    const motorcycle = arrayMockAllMotorcycle.map(
      (motocycle) => new Motorcycle(motocycle),
    );
    const response = await new MotorcycleService().getAllMotorcycles();

    expect(response).to.be.deep.equal(motorcycle);
  });

  it('Testando a função getMotorcycleById', async function () {
    sinon.stub(Model, 'findById').resolves(outputMotorcycle);

    const motorcycle = new Motorcycle(outputMotorcycle);
    const response = await new MotorcycleService().getMotorcycleById(
      '6348513f34c397abcad040b2',
    );

    expect(response).to.be.deep.equal(motorcycle);
  });

  afterEach(function () {
    sinon.restore();
  });
});
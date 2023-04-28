import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { inputMockIdCars, validId, inputMockAllCars } from '../CarsMock';

describe('Testando CarService', function () {
  it('Testando a função getAllCars', async function () {
    sinon.stub(Model, 'find').resolves(inputMockAllCars);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(inputMockAllCars);
  });

  it('Testando a função getCarById', async function () {
    sinon.stub(Model, 'findOne').resolves(inputMockIdCars);

    const service = new CarService();
    const result = await service.getCarById(validId);

    expect(result).to.be.deep.equal(inputMockIdCars);
  });

  afterEach(function () {
    sinon.restore();
  });
});
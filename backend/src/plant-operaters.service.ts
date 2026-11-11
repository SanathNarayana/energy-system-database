
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlantOperator } from './plant-operator.entity.js';

export type CreatePlantOperatorInput = {
  first_name: string;
  last_name: string;
  street?: string;
  house_number?: string;
  postal_code?: string;
  city?: string;
  phone?: string;
  email?: string;
};

@Injectable()
export class PlantOperatorsService {
  constructor(
    @InjectRepository(PlantOperator)
    private readonly operatorsRepository: Repository<PlantOperator>,
  ) {}

  // GET - Retrieve all operators
  findAll(): Promise<PlantOperator[]> {
    return this.operatorsRepository.find();
  }

  // POST - Create a new operator
  create(data: CreatePlantOperatorInput): Promise<PlantOperator> {
    const newOperator = this.operatorsRepository.create(data);

    return this.operatorsRepository.save(newOperator);
  }
}
export default PlantOperatorsService;
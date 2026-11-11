
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlantOwner } from './plant-owners.entity.js';

@Injectable()
export class PlantOwnersService {
  constructor(
    @InjectRepository(PlantOwner)
    private readonly ownersRepository: Repository<PlantOwner>,
  ) {}

  // GET - Retrieve all plant owners
  findAll(): Promise<PlantOwner[]> {
    return this.ownersRepository.find();
  }

  // POST - Create a new plant owner
  create(data: {
    first_name: string;
    last_name: string;
  }): Promise<PlantOwner> {
    const newOwner = this.ownersRepository.create(data);

    return this.ownersRepository.save(newOwner);
  }
}
export default PlantOwnersService;
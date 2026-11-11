
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlantAddress } from './plant-addresses.entity.js';

export type CreatePlantAddressInput = {
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
export class PlantAddressesService {
  constructor(
    @InjectRepository(PlantAddress)
    private readonly addressesRepository: Repository<PlantAddress>,
  ) {}

  // GET - Retrieve all plant addresses
  findAll(): Promise<PlantAddress[]> {
    return this.addressesRepository.find();
  }

  // POST - Create a new plant address
  create(data: CreatePlantAddressInput): Promise<PlantAddress> {
    const newAddress = this.addressesRepository.create(data);

    return this.addressesRepository.save(newAddress);
  }
}
export default PlantAddressesService;
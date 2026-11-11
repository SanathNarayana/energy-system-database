
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlantAddressesService } from './plant-addresses.service.js';
import type { CreatePlantAddressInput } from './plant-addresses.service.js';

@Controller('plant-addresses')
export class PlantAddressesController {
  constructor(
    private readonly addressesService: PlantAddressesService,
  ) {}

  // GET /plant-addresses
  @Get()
  findAll() {
    return this.addressesService.findAll();
  }

  // POST /plant-addresses
  @Post()
  create(@Body() body: CreatePlantAddressInput) {
    return this.addressesService.create(body);
  }
}
export default PlantAddressesController;
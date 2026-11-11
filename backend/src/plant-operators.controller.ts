
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlantOperatorsService } from './plant-operaters.service.js';
import type {CreatePlantOperatorInput } from './plant-operaters.service.js';



@Controller('plant-operators')
export class PlantOperatorsController {
  constructor(
    private readonly operatorsService: PlantOperatorsService,
  ) {}

  // GET /plant-operators
  @Get()
  findAll() {
    return this.operatorsService.findAll();
  }

  // POST /plant-operators
  @Post()
  create(@Body() body: CreatePlantOperatorInput) {
    return this.operatorsService.create(body);
  }
}
export default PlantOperatorsController;
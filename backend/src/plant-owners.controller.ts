
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlantOwnersService } from './plant-owners.service.js';

@Controller('plant-owners')
export class PlantOwnersController {
  constructor(
    private readonly ownersService: PlantOwnersService,
  ) {}

// GET /plant-owners
  @Get()
  findAll() {
    return this.ownersService.findAll();
  }

  // POST /plant-owners
  @Post()
  create(
    @Body() body: {
      first_name: string;
      last_name: string;
    },
  ) {
    return this.ownersService.create(body);
  }
}


import { Controller, Get, Post, Body } from '@nestjs/common';
import { InstallersService } from './installers.service.js';
import type { CreateInstallerInput } from './installers.service.js';

@Controller('installers')
export class InstallersController {
  constructor(
    private readonly installersService: InstallersService,
  ) {}

  // GET /installers
  @Get()
  findAll() {
    return this.installersService.findAll();
  }

  // POST /installers
  @Post()
  create(@Body() body: CreateInstallerInput) {
    return this.installersService.create(body);
  }
}
export default InstallersController;
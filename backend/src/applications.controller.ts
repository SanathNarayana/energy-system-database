import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApplicationsService } from './applications.service.js';
import type { CreateApplicationInput } from './applications.service.js';


@Controller('applications')
export class ApplicationsController {
  constructor(
    private readonly applicationsService: ApplicationsService,
  ) {}

  // GET /applications
  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }

  // POST /applications
  @Post()
  create(@Body() body: CreateApplicationInput) {
    return this.applicationsService.create(body);
  }
}
export default ApplicationsController;
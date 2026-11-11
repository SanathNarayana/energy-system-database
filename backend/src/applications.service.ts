
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './applications.entity.js';

export type CreateApplicationInput = {
  owner_id: string;
  operator_id: string;
  installer_id: string;
  plant_address_id: string;

  system_type: 'New construction' | 'Extension' | 'Dismantling';

  grid_application_attached?: boolean;
  site_plan_attached?: boolean;
  data_sheet_attached?: boolean;
  unit_certificate_available?: boolean;
  na_certificate_attached?: boolean;
  power_flow_certificate_attached?: boolean;
  circuit_diagram_attached?: boolean;

  planned_commissioning_date?: string;
};

const applicationRelations = {
  owner: true,
  operator: true,
  installer: true,
  plant_address: true,
};

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationsRepository: Repository<Application>,
  ) {}

  // GET - Retrieve applications and related information
  findAll(): Promise<Application[]> {
    return this.applicationsRepository.find({
      relations: applicationRelations,
    });
  }

  // POST - Create a new application
  async create(
    data: CreateApplicationInput,
  ): Promise<Application> {
    const newApplication =
      this.applicationsRepository.create(data);

    const savedApplication =
      await this.applicationsRepository.save(newApplication);

    return this.applicationsRepository.findOneOrFail({
      where: { id: savedApplication.id },
      relations: applicationRelations,
    });
  }
}
export default ApplicationsService;
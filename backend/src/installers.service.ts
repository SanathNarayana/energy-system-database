
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Installer } from './installers.entity.js';

export type CreateInstallerInput = {
  company_name: string;
  city?: string;
  registration_number?: string;
};

@Injectable()
export class InstallersService {
  constructor(
    @InjectRepository(Installer)
    private readonly installersRepository: Repository<Installer>,
  ) {}

  // GET - Retrieve all installers
  findAll(): Promise<Installer[]> {
    return this.installersRepository.find();
  }

  // POST - Create a new installer
  create(data: CreateInstallerInput): Promise<Installer> {
    const newInstaller = this.installersRepository.create(data);

    return this.installersRepository.save(newInstaller);
  }
}
export default InstallersService;
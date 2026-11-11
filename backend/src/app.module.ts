
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { PlantOwner } from './plant-owners.entity.js';
import { PlantOwnersController } from './plant-owners.controller.js';
import { PlantOwnersService } from './plant-owners.service.js';

import { PlantOperator } from './plant-operator.entity.js';
import { PlantOperatorsController } from './plant-operators.controller.js';
import { PlantOperatorsService } from './plant-operaters.service.js';

import { Installer } from './installers.entity.js';
import { InstallersController } from './installers.controller.js';
import { InstallersService } from './installers.service.js';

import { PlantAddress } from './plant-addresses.entity.js';
import { PlantAddressesController } from './plant-addresses.controller.js';
import { PlantAddressesService } from './plant-addresses.service.js';

import { Application } from './applications.entity.js';
import { ApplicationsController } from './applications.controller.js';
import { ApplicationsService } from './applications.service.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: 'energy_system_database',

      entities: [
        PlantOwner,
        PlantOperator,
        Installer,
        PlantAddress,
        Application,
      ],

      synchronize: false,
    }),

    TypeOrmModule.forFeature([
      PlantOwner,
      PlantOperator,
      Installer,
      PlantAddress,
      Application,
    ]),
  ],

  controllers: [
    AppController,
    PlantOwnersController,
    PlantOperatorsController,
    InstallersController,
    PlantAddressesController,
    ApplicationsController,
  ],

  providers: [
    AppService,
    PlantOwnersService,
    PlantOperatorsService,
    InstallersService,
    PlantAddressesService,
    ApplicationsService,
  ],
})
export class AppModule {}


import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  type Relation,
} from 'typeorm';

import { PlantOwner } from './plant-owners.entity.js';
import { PlantOperator } from './plant-operator.entity.js';
import { Installer } from './installers.entity.js';
import { PlantAddress } from './plant-addresses.entity.js';

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'uuid', nullable: true })
  owner_id!: string | null;

  @Column({ type: 'uuid', nullable: true })
  operator_id!: string | null;

  @Column({ type: 'uuid', nullable: true })
  installer_id!: string | null;

  @Column({ type: 'uuid', nullable: true })
  plant_address_id!: string | null;

  @ManyToOne(() => PlantOwner, { nullable: true })
  @JoinColumn({ name: 'owner_id' })
  owner!: Relation<PlantOwner> | null;

  @ManyToOne(() => PlantOperator, { nullable: true })
  @JoinColumn({ name: 'operator_id' })
  operator!: Relation<PlantOperator> | null;

  @ManyToOne(() => Installer, { nullable: true })
  @JoinColumn({ name: 'installer_id' })
  installer!: Relation<Installer> | null;

  @ManyToOne(() => PlantAddress, { nullable: true })
  @JoinColumn({ name: 'plant_address_id' })
  plant_address!: Relation<PlantAddress> | null;

  @Column({ type: 'varchar', length: 30, nullable: true })
  system_type!: string | null;

  @Column({ type: 'boolean', nullable: true })
  grid_application_attached!: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  site_plan_attached!: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  data_sheet_attached!: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  unit_certificate_available!: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  na_certificate_attached!: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  power_flow_certificate_attached!: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  circuit_diagram_attached!: boolean | null;

  @Column({ type: 'date', nullable: true })
  planned_commissioning_date!: string | null;
}
export default Application;
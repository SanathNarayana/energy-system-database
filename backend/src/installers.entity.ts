
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('installers')
export class Installer {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  company_name!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  city!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  registration_number!: string | null;
}
export default Installer;

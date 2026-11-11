
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plant_owners')
export class PlantOwner {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  first_name!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  last_name!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  street!: string | null;

  @Column({ type: 'varchar', length: 10, nullable: true })
  house_number!: string | null;

  @Column({ type: 'varchar', length: 10, nullable: true })
  postal_code!: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  city!: string | null;

  @Column({ type: 'varchar', length: 30, nullable: true })
  phone!: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email!: string | null;
}
export default PlantOwner;
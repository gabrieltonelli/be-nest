import {
  Column,
  Entity,
  JoinColumn,
  Long,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/entities';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true, length: 30 })
  prefix: string;
  
  @Column({ nullable: false, length: 30 })
  name: string;
  
  @Column({ nullable: true, length: 100 })
  detail: string;
  
  @Column({ nullable: false })
  idAmbit: number;
  
  @Column({ nullable: false })
  iconUrl: string;
  
  @Column({ nullable: false, length: 8 })
  color: string;

  @Column({ nullable: false, default: 1 })
  idStatus: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}

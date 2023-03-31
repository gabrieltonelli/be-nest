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
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, length: 30 })
  name: string;

  @Column({ nullable: false, length: 30 })
  username: string;

  @Column({ nullable: false })
  idSocialNetwork: number;

  @Column()
  email: string;

  @Column({ nullable: false })
  photoUrl: string;

  @Column()
  company: string;

  @Column()
  city: string;

  @Column()
  job: string;

  @Column()
  gender: string;

  @Column({ nullable: false, default: 1 })
  idStatus: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.contacts, { cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User;
}

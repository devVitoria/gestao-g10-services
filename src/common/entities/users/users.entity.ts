import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teams } from './teams.entity';
import { Ocupations } from './ocupations.entity';

@Entity({ name: 'GGD_USERS' })
export class Users {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({ name: 'NAME', length: 100, default: null })
  name: string;

  @Column({ name: 'BIRTHDAY', default: null })
  birthday: Date;

  @Column({ name: 'ACTIVE', default: 1 })
  active: number;

  @ManyToOne(() => Teams, (t) => t.users, { nullable: false })
  @JoinColumn({ name: 'TEAM' })
  team: Teams;

  @ManyToOne(() => Ocupations, (t) => t.users, { nullable: false })
  @JoinColumn({ name: 'OCUPATION' })
  ocupation: Ocupations;
}

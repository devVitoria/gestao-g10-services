import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teams } from './teams.entity';
import { Occupations } from './occupations.entity';
import { UsersTaks } from '../tasks/users-tasks.entity';
import { Events } from '../events/events.entity';
import { Tasks } from '../tasks/tasks.entity';
import { Atas } from '../atas/atas.entity';

@Entity({ name: 'GGD_USERS' })
export class Users {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({ name: 'NAME', length: 100, default: null })
  name: string;

  @Column({ name: 'BIRTHDAY', type: 'timestamp', default: null })
  birthday: Date;

  @Column({
    name: 'CHANGED_AT',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  changedAt: Date;

  @Column({ name: 'ACTIVE', default: 1 })
  active: number;

  @ManyToOne(() => Teams, (t) => t.users, { nullable: false })
  @JoinColumn({ name: 'TEAM' })
  team: Teams;

  @ManyToOne(() => Occupations, (t) => t.users, { nullable: false })
  @JoinColumn({ name: 'OCUPATION' })
  ocupation: Occupations;

  @OneToMany(() => UsersTaks, (ut) => ut.user)
  tasks: UsersTaks[];

  @OneToMany(() => Tasks, (e) => e.user)
  userTaks: Tasks[];

  @OneToMany(() => Events, (e) => e.user)
  events: Events[];

  @OneToMany(() => Atas, (a) => a.user)
  userEvent: Atas[];
}

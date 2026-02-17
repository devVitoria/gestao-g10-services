import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersTaks } from './users-tasks.entity';
import { Users } from '../users/users.entity';
import { Teams } from '../users/teams.entity';

@Entity({ name: 'GGD_TASKS' })
export class Tasks {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({ name: 'DESCRIPTION', length: 255, default: null })
  desc: string;

  @Column({
    name: 'START_DATE',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  startDate: Date;

  @Column({
    name: 'END_DATE',
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP + interval '1 day'",
  })
  endDate: Date;

  @Column({ name: 'RECURRENCE', length: 100, default: null })
  recurrence: string;

  @Column({ name: 'IND_DELETED', default: 0 })
  indDeleted: number;

  @Column({
    name: 'CHANGED_AT',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  changedAt: Date;

  @OneToMany(() => UsersTaks, (ut) => ut.task)
  tasksCreated: UsersTaks[];

  @ManyToOne(() => Users, (u) => u.userTaks)
  @JoinColumn({ name: 'CREATED_BY' })
  user: Users;

  @ManyToOne(() => Teams, (t) => t.teamEvents)
  @JoinColumn({ name: 'TEAM_RELATED' })
  taskTeam: Teams;
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersTaks } from './users-tasks.entity';

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
  userTasks: UsersTaks[];
}

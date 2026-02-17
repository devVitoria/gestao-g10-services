import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Tasks } from './tasks.entity';

@Entity({ name: 'GGD_USERS_TASKS' })
export class UsersTaks {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @ManyToOne(() => Users, (u) => u.tasks)
  @JoinColumn({ name: 'USER_ID' })
  user: Users;

  @ManyToOne(() => Tasks, (u) => u.tasksCreated)
  @JoinColumn({ name: 'TASK_ID' })
  task: Tasks;

  @Column({ name: 'IND_ACTIVE', default: 1 })
  indActive: number;

  @Column({
    name: 'STARTED_AT',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  startedAt: Date;
}

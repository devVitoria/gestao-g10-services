import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Teams } from '../users/teams.entity';

@Entity({ name: 'GGD_EVENTS' })
export class Events {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({
    name: 'TITLE',
  })
  title: string;

  @Column({
    name: 'START_DATE',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  startDate: Date;

  @Column({
    name: 'END_DATE',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  endDate: Date;

  @ManyToOne(() => Users, (u) => u.events)
  @JoinColumn({ name: 'CREATED_BY' })
  user: Users;

  @ManyToOne(() => Teams, (t) => t.events)
  @JoinColumn({ name: 'TEAM_RELATED' })
  team: Teams;
}

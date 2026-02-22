import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Teams } from '../users/teams.entity';
import { Events } from '../events/events.entity';

@Entity({ name: 'GGD_ATAS' })
export class Atas {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({
    name: 'TITLE',
  })
  title: string;

  @Column({
    name: 'CREATED_AT',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ManyToOne(() => Users, (u) => u.userEvent)
  @JoinColumn({ name: 'CREATED_BY' })
  user: Users;

  @Column({ name: 'CONTENT', length: 4000, nullable: true })
  content?: string;

  @ManyToOne(() => Events, (u) => u.eventRelated)
  @JoinColumn({ name: 'EVENT_RELATED' })
  eventRelates: Users;

  @ManyToOne(() => Teams, (t) => t.teamRelated)
  @JoinColumn({ name: 'TEAM_RELATED' })
  team: Teams;
}

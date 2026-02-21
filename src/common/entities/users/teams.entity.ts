import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';
import { Events } from '../events/events.entity';
import { Tasks } from '../tasks/tasks.entity';
import { Atas } from '../atas/atas.entity';

@Entity({ name: 'GGD_TEAMS' })
export class Teams {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({ name: 'NAME', length: 100 })
  name: string;

  @Column({
    name: 'CHANGED_AT',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  changedAt: Date;

  @OneToMany(() => Users, (u) => u.team)
  users: Users[];

  @OneToMany(() => Tasks, (e) => e.taskTeam)
  teamEvents: Tasks[];

  @OneToMany(() => Events, (e) => e.team)
  events: Events[];

  @OneToMany(() => Atas, (a) => a.team)
  teamRelated: Atas[];
}

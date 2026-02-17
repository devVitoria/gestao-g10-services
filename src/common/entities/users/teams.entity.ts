import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';

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
}

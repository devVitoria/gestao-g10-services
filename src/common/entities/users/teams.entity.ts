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

  @OneToMany(() => Users, (u) => u.team)
  users: Users[];
}

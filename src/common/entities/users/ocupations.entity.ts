import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity({ name: 'GGD_OCUPATIONS' })
export class Ocupations {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({ name: 'DESCRIPTION', length: 100 })
  desc: string;

  @OneToMany(() => Users, (u) => u.ocupation)
  users: Users[];
}

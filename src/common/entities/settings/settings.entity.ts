import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'GGD_MENUS' })
export class Menus {
  @PrimaryGeneratedColumn({
    name: 'ID',
  })
  id: number;

  @Column({ name: 'MENU_DESCRIPTION', length: 255, default: null })
  menuDescription: string;

  @Column({
    name: 'CHANGED_AT',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  changedAt: Date;

  @Column({ name: 'ACTIVE', default: 1 })
  active: number;
}

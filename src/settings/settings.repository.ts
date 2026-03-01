import { InjectRepository } from '@nestjs/typeorm';
import { InsertMenuDto } from 'src/common/dto/settings/insert-menu.dto';
import { Menus } from 'src/common/entities/settings/settings.entity';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { InsertResult } from 'typeorm/browser';

export class SettingsRepository {
  constructor(
    @InjectRepository(Menus)
    private readonly menusRepo: Repository<Menus>,
  ) {}

  insertMenu(data: InsertMenuDto): Promise<InsertResult | null> {
    return this.menusRepo.insert({
      ...data,
      active: 1,
      changedAt: () => 'CURRENT_TIMESTAMP',
    });
  }

  findMenuById(id: number): Promise<Menus | null> {
    return this.menusRepo.findOneBy({ id });
  }

  inativeMenu(id: number): Promise<UpdateResult> {
    return this.menusRepo.update(
      { id },
      {
        active: 0,
        changedAt: () => 'CURRENT_TIMESTAMP',
      },
    );
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Events } from 'src/common/entities/events/events.entity';
import { Repository } from 'typeorm';
import { InsertResult } from 'typeorm/browser';

export class UsersRepository {
  constructor(
    @InjectRepository(Events)
    private readonly evensRepo: Repository<Events>,
  ) {}

  async insertEvent(data: Partial<Events>): Promise<InsertResult> {
    return await this.evensRepo.insert(data);
  }
}

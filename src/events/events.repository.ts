import { InjectRepository } from '@nestjs/typeorm';
import { Events } from 'src/common/entities/events/events.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { InsertResult } from 'typeorm/browser';

export class EventsRepository {
  constructor(
    @InjectRepository(Events)
    private readonly evensRepo: Repository<Events>,
  ) {}

  async insertEvent(data: Partial<Events>): Promise<InsertResult> {
    return await this.evensRepo.insert(data);
  }

  async getEvents(): Promise<Events[]> {
    return await this.evensRepo.find();
  }

  async getEventById(id: number): Promise<Events | null> {
    return await this.evensRepo.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.evensRepo.delete({ id });
  }
}

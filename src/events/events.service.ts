import { BadRequestException, Injectable } from '@nestjs/common';
import moment from 'moment';
import { InsertEventDto } from 'src/common/dto/events/insert-event.dto';
import { StatusRes } from 'src/common/utils/users/class';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EventsService {
  constructor(private readonly usersService: UsersService) {}

  async insertEvent(data: InsertEventDto): Promise<StatusRes | null> {
    try {
      const [occupation, team] = await Promise.all([
        this.usersService.findModule('occupation', data.occupation),
        this.usersService.findModule('team', data.team),
      ]);

      const eventInsertPayload = {
        ...data,
        startDate: moment(data.startDate).toDate(),
        endDate: moment(data.endDate).toDate(),

        occupation,
        team,
      };

      await this.eventsRepository.inserEvent(eventInsertPayload);

      return {
        status: 201,
        message: 'OK',
      };
    } catch (e) {
      console.error('ERRO ao inserir evento', e);
      throw new BadRequestException('Erro ao inserir evento');
    }
  }
}

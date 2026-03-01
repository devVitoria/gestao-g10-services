import { BadRequestException, Injectable } from '@nestjs/common';
import moment from 'moment';
import { InsertEventDto } from 'src/common/dto/events/insert-event.dto';
import { StatusRes } from 'src/common/utils/users/classes';
import { UsersService } from 'src/users/users.service';
import { EventsRepository } from './events.repository';
import { Events } from 'src/common/entities/events/events.entity';

@Injectable()
export class EventsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly eventsRepository: EventsRepository,
  ) {}

  async insertEvent(data: InsertEventDto): Promise<StatusRes | null> {
    try {
      const [occupation, team, user] = await Promise.all([
        this.usersService.findOccupation(data.occupation),
        this.usersService.findTeam(data.team),
        this.usersService.findUser(data.userId),
      ]);

      const eventInsertPayload = {
        ...data,
        startDate: moment(data.startDate).toDate(),
        endDate: moment(data.endDate).toDate(),
        user,
        occupation,
        team,
      };

      await this.eventsRepository.insertEvent(eventInsertPayload);

      return {
        status: 201,
        message: 'OK',
      };
    } catch (e) {
      console.error('ERRO ao inserir evento', e);
      throw new BadRequestException('Erro ao inserir evento');
    }
  }

  async getEvents(): Promise<Events[] | null> {
    return this.eventsRepository.getEvents();
  }

  async deleteEvent(id: string): Promise<StatusRes> {
    const existsEvent = await this.eventsRepository.getEventById(Number(id));
    if (!existsEvent)
      throw new BadRequestException('Não existe um evento com esse ID');

    const res = await this.eventsRepository.delete(Number(id));

    if (res.affected === 1)
      return {
        status: 200,
        message: 'Deletado',
      };

    return {
      status: 400,
      message: 'Erro ao deletar',
    };
  }
}

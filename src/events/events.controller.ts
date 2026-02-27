import { Body, Controller, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StatusRes } from 'src/common/utils/users/class';
import { InsertEventDto } from 'src/common/dto/events/insert-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiOperation({ summary: 'Insere evento' })
  @Post('/insert-event')
  @ApiResponse({
    status: 201,
    description: 'Evento criado com sucesso',
    type: StatusRes,
  })
  insertEvent(@Body() body: InsertEventDto): Promise<StatusRes | null> {
    return this.eventsService.insertEvent(body);
  }
}

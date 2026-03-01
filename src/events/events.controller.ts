import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StatusRes } from 'src/common/utils/users/classes';
import { InsertEventDto } from 'src/common/dto/events/insert-event.dto';
import { Events } from 'src/common/entities/events/events.entity';

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

  @ApiOperation({ summary: 'Busca todos os eventos cadastrados' })
  @Get('')
  @ApiResponse({
    status: 200,
    isArray: true,
    description: 'OK',
    type: Events,
  })
  getEvents(): Promise<Events[] | null> {
    return this.eventsService.getEvents();
  }

  @ApiOperation({ summary: 'Deleta um evento' })
  @Delete('/delete/:id')
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: StatusRes,
  })
  deleteEvent(@Param('id') id: string): Promise<StatusRes> {
    return this.eventsService.deleteEvent(id);
  }
}

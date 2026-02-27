import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from 'src/common/entities/events/events.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [EventsController],
  imports: [TypeOrmModule.forFeature([Events]), UsersService],

  providers: [EventsService],
})
export class EventsModule {}

import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from 'src/common/entities/events/events.entity';
import { UsersModule } from 'src/users/users.module';
import { EventsRepository } from './events.repository';

@Module({
  controllers: [EventsController],
  imports: [TypeOrmModule.forFeature([Events]), UsersModule],

  providers: [EventsService, EventsRepository],
})
export class EventsModule {}

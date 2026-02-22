import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Tasks } from 'src/common/entities/tasks/tasks.entity';
import { UsersTaks } from 'src/common/entities/tasks/users-tasks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([Tasks, UsersTaks])],

  providers: [TasksService],
})
export class TasksModule {}

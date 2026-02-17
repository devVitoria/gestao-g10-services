import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { AtasModule } from './atas/atas.module';
import { DbModule } from './common/db/db.module';

@Module({
  imports: [
    UsersModule,
    EventsModule,
    AuthModule,
    TasksModule,
    AtasModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

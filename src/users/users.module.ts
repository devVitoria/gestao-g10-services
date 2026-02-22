import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from 'src/common/entities/users/users.entity';
import { Teams } from 'src/common/entities/users/teams.entity';
import { Occupations } from 'src/common/entities/users/occupations.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([Users, Teams, Occupations])],
  providers: [UsersService],
})
export class UsersModule {}

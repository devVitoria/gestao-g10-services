import { Module } from '@nestjs/common';
import { AtasService } from './atas.service';
import { AtasController } from './atas.controller';
import { Atas } from 'src/common/entities/atas/atas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AtasController],
  imports: [TypeOrmModule.forFeature([Atas])],

  providers: [AtasService],
})
export class AtasModule {}

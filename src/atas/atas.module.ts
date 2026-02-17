import { Module } from '@nestjs/common';
import { AtasService } from './atas.service';
import { AtasController } from './atas.controller';

@Module({
  controllers: [AtasController],
  providers: [AtasService],
})
export class AtasModule {}

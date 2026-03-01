import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingsController } from './settings.controller';
import { Menus } from 'src/common/entities/settings/settings.entity';
import { SettingsService } from './settings.service';
import { SettingsRepository } from './settings.repository';

@Module({
  controllers: [SettingsController],
  imports: [TypeOrmModule.forFeature([Menus])],
  providers: [SettingsService, SettingsRepository],
})
export class SettingsModule {}

import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StatusRes } from 'src/common/utils/users/classes';
import { SettingsService } from './settings.service';
import { InsertMenuDto } from 'src/common/dto/settings/insert-menu.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @ApiOperation({ summary: 'Cria um menu ativo' })
  @Post('insert-menu')
  @ApiResponse({
    status: 201,
    description: 'Menu inserido com sucesso',
    type: StatusRes,
  })
  insertMenu(@Body() body: InsertMenuDto): Promise<StatusRes | null> {
    return this.settingsService.insertMenu(body);
  }

  @ApiOperation({ summary: 'Inativa um menu' })
  @Post('desative-menu/:id')
  @ApiResponse({
    status: 200,
    description: 'Menu desativado com sucesso',
    type: StatusRes,
  })
  insertTupdateMenueam(@Param('id') id: string): Promise<StatusRes | null> {
    return this.settingsService.inativeMenu(id);
  }
}

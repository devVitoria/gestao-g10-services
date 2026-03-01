import { BadRequestException, Injectable } from '@nestjs/common';
import { StatusRes } from 'src/common/utils/users/classes';
import { SettingsRepository } from './settings.repository';
import { InsertMenuDto } from 'src/common/dto/settings/insert-menu.dto';

@Injectable()
export class SettingsService {
  constructor(private readonly settingsRepo: SettingsRepository) {}

  async insertMenu(data: InsertMenuDto): Promise<StatusRes> {
    try {
      await this.settingsRepo.insertMenu(data);
      return {
        status: 201,
        message: 'OK',
      };
    } catch (e) {
      console.error('erro', e);
      throw new BadRequestException('Erro ao inserir menu');
    }
  }

  async inativeMenu(id: string): Promise<StatusRes | null> {
    try {
      const menu = await this.settingsRepo.findMenuById(Number(id));
      if (!menu) throw new BadRequestException('Menu não encontrado');

      const updated = await this.settingsRepo.inativeMenu(Number(id));

      if (updated.affected === 1)
        return {
          status: 200,
          message: 'Inativado com sucesso',
        };

      return {
        status: 400,
        message: 'Ocorreu um erro na iativação do menu.',
      };
    } catch (e) {
      console.error('Erro na inativação', e);
      throw new BadRequestException('Ocorreu um erro');
    }
  }
}

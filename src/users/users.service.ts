import { BadRequestException, Injectable } from '@nestjs/common';
import { InsertUserDto } from 'src/common/dto/users/insert-user.dto';
import { UsersRepository } from './users.repository';
import moment from 'moment';
import { InsertUserRes } from 'src/common/utils/users/class';

@Injectable()
export class UsersService {
  constructor(private readonly usersReporitory: UsersRepository) {}
  async insertUser(data: InsertUserDto): Promise<InsertUserRes | null> {
    try {
      const [occupation, team] = await Promise.all([
        this.usersReporitory.getOccupationById(data.occupation),
        this.usersReporitory.getTeamById(data.team),
      ]);

      if (!occupation) {
        throw new BadRequestException(
          'O ID para ocupação informado é inválido ou não existe',
        );
      }

      if (!team) {
        throw new BadRequestException(
          'O ID para equipe informado é inválido ou não existe',
        );
      }

      const userInsertPayload = {
        ...data,
        birthday: moment(data.birthday).toDate(),
        occupation,
        team,
      };
      await this.usersReporitory.insertUser(userInsertPayload);

      return {
        status: 201,
        message: 'OK',
      };
    } catch (e) {
      console.error('ERRO ao inserir usuário', e);
      throw new BadRequestException('Erro ao inserir usuário');
    }
  }
}

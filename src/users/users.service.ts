import { BadRequestException, Injectable } from '@nestjs/common';
import { InsertUserDto } from 'src/common/dto/users/insert-user.dto';
import { UsersRepository } from './users.repository';
import moment from 'moment';
import { StatusRes } from 'src/common/utils/users/classes';
import { InsertTeamDto } from 'src/common/dto/users/insert-team.dto';
import { InsertOccupationDto } from 'src/common/dto/users/insert-occcupation.dto';
import { Occupations } from 'src/common/entities/users/occupations.entity';
import { Teams } from 'src/common/entities/users/teams.entity';
import { Users } from 'src/common/entities/users/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersReporitory: UsersRepository) {}

  async insertTeam(data: InsertTeamDto): Promise<StatusRes> {
    const existsTeam = await this.usersReporitory.getTeamByName(
      data?.name?.trim(),
    );

    if (existsTeam) {
      throw new BadRequestException('Já existe uma equipe com esse nome!');
    }
    await this.usersReporitory.insertTeam(data);
    return {
      status: 201,
      message: 'OK',
    };
  }

  async insertOccupation(data: InsertOccupationDto): Promise<StatusRes> {
    const existsOccupation =
      await this.usersReporitory.getOccupationByDescription(
        data?.description?.trim(),
      );

    if (existsOccupation) {
      throw new BadRequestException(
        'Já existe uma ocupação com essa descrição!',
      );
    }

    await this.usersReporitory.insertOccupation({
      desc: data.description,
    });

    return {
      status: 201,
      message: 'OK',
    };
  }

  async findOccupation(id: number): Promise<Occupations> {
    const occupation = await this.usersReporitory.getOccupationById(id);

    if (!occupation) {
      throw new BadRequestException(
        'O ID para ocupação informado é inválido ou não existe',
      );
    }

    return occupation;
  }

  async findUser(id: number): Promise<Users> {
    const user = await this.usersReporitory.getUserById(id);

    if (!user) {
      throw new BadRequestException(
        'O ID do usuário informado é inválido ou não existe',
      );
    }

    return user;
  }

  async findTeam(id: number): Promise<Teams> {
    const team = await this.usersReporitory.getTeamById(id);

    if (!team) {
      throw new BadRequestException(
        'O ID para equipe informado é inválido ou não existe',
      );
    }

    return team;
  }
  async insertUser(data: InsertUserDto): Promise<StatusRes | null> {
    try {
      const [occupation, team] = await Promise.all([
        this.findOccupation(data.occupation),
        this.findTeam(data.team),
      ]);

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

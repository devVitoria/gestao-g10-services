import { InjectRepository } from '@nestjs/typeorm';
import { Occupations } from 'src/common/entities/users/occupations.entity';
import { Teams } from 'src/common/entities/users/teams.entity';
import { Users } from 'src/common/entities/users/users.entity';
import { ILike, Repository } from 'typeorm';
import { InsertResult } from 'typeorm/browser';

export class UsersRepository {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
    @InjectRepository(Occupations)
    private readonly occupationsRepo: Repository<Occupations>,
    @InjectRepository(Teams)
    private readonly teamsRepo: Repository<Teams>,
  ) {}

  getOccupationById(id: number): Promise<Occupations | null> {
    return this.occupationsRepo.findOne({
      where: {
        id,
      },
    });
  }

  getUserById(id: number): Promise<Users | null> {
    return this.usersRepo.findOne({
      where: {
        id,
      },
    });
  }

  getUserByCode(userCode: string): Promise<Users | null> {
    return this.usersRepo.findOne({
      where: {
        userCode,
      },
    });
  }

  getTeamById(id: number): Promise<Teams | null> {
    return this.teamsRepo.findOne({
      where: {
        id,
      },
    });
  }

  async insertUser(data: Partial<Users>): Promise<InsertResult> {
    return await this.usersRepo.insert(data);
  }

  async getTeamByName(name: string): Promise<Teams | null> {
    return await this.teamsRepo.findOne({
      where: {
        name: ILike(`%${name}%`),
      },
    });
  }

  async insertTeam(data: Partial<Teams>): Promise<InsertResult> {
    return await this.teamsRepo.insert(data);
  }

  async updateUser(data: Partial<Users>) {
    return this.usersRepo.update(
      { id: data.id },
      {
        ...data,
        changedAt: () => 'CURRENT_TIMESTAMP',
      },
    );
  }

  async getOccupationByDescription(
    description: string,
  ): Promise<Occupations | null> {
    return await this.occupationsRepo.findOne({
      where: {
        desc: ILike(`%${description}%`),
      },
    });
  }

  async insertOccupation(data: Partial<Occupations>): Promise<InsertResult> {
    return await this.occupationsRepo.insert(data);
  }

  async getAllUsers(): Promise<Users[] | null> {
    return this.usersRepo.find();
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Occupations } from 'src/common/entities/users/occupations.entity';
import { Teams } from 'src/common/entities/users/teams.entity';
import { Users } from 'src/common/entities/users/users.entity';
import { Repository } from 'typeorm';
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
}

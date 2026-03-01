import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StatusRes } from 'src/common/utils/users/classes';
import { InsertUserDto } from 'src/common/dto/users/insert-user.dto';
import { InsertTeamDto } from 'src/common/dto/users/insert-team.dto';
import { InsertOccupationDto } from 'src/common/dto/users/insert-occcupation.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiOperation({ summary: 'Insere uma equipe' })
  @Post('insert-team')
  @ApiResponse({
    status: 201,
    description: 'Equipe criada com sucesso',
    type: StatusRes,
  })
  insertTeam(@Body() body: InsertTeamDto): Promise<StatusRes | null> {
    return this.usersService.insertTeam(body);
  }

  @ApiOperation({ summary: 'Insere uma ocupação' })
  @Post('insert-occupation')
  @ApiResponse({
    status: 201,
    description: 'Ocupação criada com sucesso',
    type: StatusRes,
  })
  insertOccupation(
    @Body() body: InsertOccupationDto,
  ): Promise<StatusRes | null> {
    return this.usersService.insertOccupation(body);
  }

  @ApiOperation({ summary: 'Insere um usuário' })
  @Post('insert-user')
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: StatusRes,
  })
  insertUser(@Body() body: InsertUserDto): Promise<StatusRes | null> {
    return this.usersService.insertUser(body);
  }
}

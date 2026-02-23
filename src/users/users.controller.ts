import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { InsertUserRes } from 'src/common/utils/users/class';
import { InsertUserDto } from 'src/common/dto/users/insert-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Insere um usuário' })
  @Post('insert-user')
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: InsertUserRes,
  })
  insertUser(@Body() body: InsertUserDto): Promise<InsertUserRes | null> {
    return this.usersService.insertUser(body);
  }
}

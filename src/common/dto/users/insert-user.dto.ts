import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InsertUserDto {
  @ApiProperty({ description: 'Nome do usuário' })
  @IsNotEmpty({ message: 'O nome do usuário precisa ser inserido' })
  @IsString({ message: 'O nome do usuário deve ser uma string' })
  name: string;

  @ApiProperty({ description: 'Aniversário do usuário' })
  @IsNotEmpty({ message: 'O aniversário do usuário precisa ser inserido' })
  @IsString({ message: 'O nome do usuário deve ser uma data válida' })
  birthday: string;

  @ApiProperty({ description: 'ID da ocupação do usuário' })
  @IsNotEmpty({ message: 'O ID da ocupação do usuário precisa ser inserido' })
  @IsNumber({}, { message: 'O ID da ocupação do usuário deve ser um número' })
  occupation: number;

  @ApiProperty({ description: 'ID do time do usuário' })
  @IsNotEmpty({ message: 'O ID do time do usuário precisa ser inserido' })
  @IsNumber({}, { message: 'O ID do time do usuário deve ser um número' })
  team: number;
}

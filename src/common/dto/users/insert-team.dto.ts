import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class InsertTeamDto {
  @ApiProperty({ description: 'Nome da equipe' })
  @IsNotEmpty({ message: 'O nome da equipe precisa ser inserido' })
  @IsString({ message: 'O nome da equipe deve ser uma string' })
  name: string;
}

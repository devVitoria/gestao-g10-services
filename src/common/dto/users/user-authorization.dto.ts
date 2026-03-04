import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserAuthorizationDto {
  @ApiProperty({ description: 'Código do usuário' })
  @IsNotEmpty({ message: 'Código do usuário precisa ser inserido' })
  @IsString({ message: 'Código do usuário deve ser string' })
  userCode: string;

  @ApiProperty({ description: 'Aniversário do usuário' })
  @IsNotEmpty({ message: 'O aniversário do usuário precisa ser inserido' })
  @IsString({ message: 'O nome do usuário deve ser uma data válida' })
  birthday: string;
}

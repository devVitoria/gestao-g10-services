import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class InsertEventDto {
  @ApiProperty({ description: 'Título do evento' })
  @IsString({ message: 'O título do evento deve ser uma string' })
  @IsNotEmpty({ message: 'O título do evento é obrigatório' })
  title: string;

  @ApiProperty({ description: 'Data de início do evento' })
  @IsDateString(
    {},
    { message: 'A data de início deve estar no formato ISO (YYYY-MM-DD)' },
  )
  @IsNotEmpty({ message: 'A data de início é obrigatória' })
  startDate: string;

  @ApiProperty({ description: 'Data de fim do evento' })
  @IsDateString(
    {},
    { message: 'A data de fim deve estar no formato ISO (YYYY-MM-DD)' },
  )
  @IsNotEmpty({ message: 'A data de fim é obrigatória' })
  endDate: string;

  @ApiProperty({ description: 'ID do usuário que criou o evento' })
  @IsNotEmpty({ message: 'ID do usuário  do usuário precisa ser inserido' })
  @IsNumber({}, { message: 'ID do usuário  do usuário deve ser um número' })
  userId: number;

  @ApiProperty({ description: 'ID da ocupação do usuário' })
  @IsNotEmpty({ message: 'O ID da ocupação do usuário precisa ser inserido' })
  @IsNumber({}, { message: 'O ID da ocupação do usuário deve ser um número' })
  occupation: number;

  @ApiProperty({ description: 'ID do time do usuário' })
  @IsNotEmpty({ message: 'O ID do time do usuário precisa ser inserido' })
  @IsNumber({}, { message: 'O ID do time do usuário deve ser um número' })
  team: number;
}

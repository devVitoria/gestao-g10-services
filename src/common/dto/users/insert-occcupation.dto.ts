import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class InsertOccupationDto {
  @ApiProperty({ description: 'Descrição da ocupação' })
  @IsNotEmpty({ message: 'A descrição da ocupação precisa ser inserida' })
  @IsString({ message: 'A descrição da ocupação deve ser uma string' })
  description: string;
}

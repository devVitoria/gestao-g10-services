import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class InsertMenuDto {
  @ApiProperty({ description: 'A descrição do menu' })
  @IsString({ message: 'A descrição do menu deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição do menu é obrigatória' })
  menuDescription: string;
}

import { Controller } from '@nestjs/common';
import { AtasService } from './atas.service';

@Controller('atas')
export class AtasController {
  constructor(private readonly atasService: AtasService) {}
}

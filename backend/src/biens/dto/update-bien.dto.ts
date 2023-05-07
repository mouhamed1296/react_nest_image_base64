import { PartialType } from '@nestjs/mapped-types';
import { CreateBienDto } from './create-bien.dto';

export class UpdateBienDto extends PartialType(CreateBienDto) {}

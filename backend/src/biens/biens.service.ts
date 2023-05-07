import { Injectable } from '@nestjs/common';
import { CreateBienDto } from './dto/create-bien.dto';
import { UpdateBienDto } from './dto/update-bien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bien } from './entities/bien.entity';
import {Repository} from "typeorm"

@Injectable()
export class BiensService {
  constructor(@InjectRepository(Bien) private bienRepository: Repository<Bien>){}
  create(createBienDto: CreateBienDto) {
    const newBien = this.bienRepository.create(createBienDto)

    return this.bienRepository.save(newBien);
  }

  findAll() {
    return this.bienRepository.find({relations: ['user']});
  }

  findOne(id: number) {
    return `This action returns a #${id} bien`;
  }

  update(id: number, updateBienDto: UpdateBienDto) {
    return `This action updates a #${id} bien`;
  }

  remove(id: number) {
    return `This action removes a #${id} bien`;
  }
}

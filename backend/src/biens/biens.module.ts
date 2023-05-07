import { Module } from '@nestjs/common';
import { BiensService } from './biens.service';
import { BiensController } from './biens.controller';
import { Bien } from './entities/bien.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bien])],
  controllers: [BiensController],
  providers: [BiensService]
})
export class BiensModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Bien } from './biens/entities/bien.entity';
import { BiensModule } from './biens/biens.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestlive',
      entities: [User, Bien],
      synchronize: true,
    }),
    UsersModule,
    BiensModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
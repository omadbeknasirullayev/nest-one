import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildersModule } from './builders/builders.module';
import { CompanyModule } from './company/company.module';
import { HttpExceptionFilter } from './errors/http-exeption.filter';

const enviroment = process.env.MODE_ENV || 'development'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${enviroment}`,
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CompanyModule,
    BuildersModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  }],
})
export class AppModule {}

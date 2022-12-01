import { MiddlewareConsumer, Module, Req, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildersController } from 'src/builders/builders.controller';
import { BuildersModule } from 'src/builders/builders.module';
import { CheckIdMiddleware } from 'src/middleware/checkIdMiddleware';
import { CheckNameMiddleware } from 'src/middleware/checkNameMiddleware';
import { LoggerMiddleware } from 'src/middleware/loggerMiddleware';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company, CompanySchema } from './schemas/company.schema';

@Module({
  imports: [
    BuildersModule,
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckNameMiddleware)
      .exclude(
        { path: 'company', method: RequestMethod.GET },
        { path: 'company/:id', method: RequestMethod.DELETE },
      )
      .forRoutes(CompanyController)
      .apply(CheckIdMiddleware)
      .exclude(
        { path: 'builders', method: RequestMethod.GET },
        { path: 'builders/:id', method: RequestMethod.DELETE },
      )
      .forRoutes(BuildersController)
      .apply(LoggerMiddleware)
      .forRoutes(CompanyController);
  }
}

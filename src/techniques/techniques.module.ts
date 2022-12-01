import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import { TechniquesController } from "./techniques.controller";
import { TechniquesService } from "./techniques.service";
import { Techniques, TechniquesSchema } from "./schemas/techniques.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Techniques.name, schema: TechniquesSchema }])],
    controllers: [TechniquesController],
    providers: [TechniquesService]
})

export class TechniquesModule {}
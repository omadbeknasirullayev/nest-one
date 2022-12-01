import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Company } from 'src/company/schemas/company.schema';

export type TechniquesDocument = HydratedDocument<Techniques>;

@Schema()
export class Techniques {
  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop()
  year: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
  company_id: Company;
}

export const TechniquesSchema = SchemaFactory.createForClass(Techniques);
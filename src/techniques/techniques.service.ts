import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateTechniquesDto } from "./dto/create-techniques.dto";
import { UpdateTechniquesDto } from "./dto/update-techniques.dto";
import { Techniques, TechniquesDocument } from "./schemas/techniques.schema";

@Injectable ()

export class TechniquesService {
    constructor(@InjectModel(Techniques.name) private techniquesModel: Model<TechniquesDocument>) {}

    async create(createTechniquesDto: CreateTechniquesDto): Promise<Techniques> {
      const createdTechniques = new this.techniquesModel(createTechniquesDto);
      return createdTechniques.save();
    }
  
    async getAll(): Promise<Techniques[]> {
      return this.techniquesModel.find().exec();
    }

    async getOne(id: string): Promise<Techniques> {
        return this.techniquesModel.findById(id).exec();
      }
    
    async edit (id: string, updateTechniquesDto: UpdateTechniquesDto): Promise <Techniques> {
      return this.techniquesModel.findByIdAndUpdate(id, updateTechniquesDto)
    }

    async delete (id: string): Promise <Techniques> {
      return this.techniquesModel.findByIdAndUpdate(id)
    }
}
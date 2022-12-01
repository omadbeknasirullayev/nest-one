import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateBuildersDto } from "./dto/create-builders.dto";
import { UpdateBuildersDto } from "./dto/update-builders.dto";
import { Builders, BuildersDocument } from "./schemas/builders.schema";

@Injectable ()

export class BuildersService {
    constructor(@InjectModel(Builders.name) private buildersModel: Model<BuildersDocument>) {}

    async create(createBuildersDto: CreateBuildersDto): Promise<Builders> {
      const createdBuilders = new this.buildersModel(createBuildersDto);
      return createdBuilders.save();
    }
  
    async getAll(): Promise<Builders[]> {
      return this.buildersModel.find().exec();
    }

    async getOne(id: string): Promise<Builders> {
        return this.buildersModel.findById(id).exec();
      }
    
    async edit (id: string, updateBuildersDto: UpdateBuildersDto): Promise <Builders> {
      return this.buildersModel.findByIdAndUpdate(id, updateBuildersDto, {new: true})
    }

    async delete (id: string): Promise <Builders> {
      return this.buildersModel.findByIdAndUpdate(id)
    }

    async getAllBuilders(id: string): Promise <Builders[]> {
      return this.buildersModel.find({company_id: id})
    }
}
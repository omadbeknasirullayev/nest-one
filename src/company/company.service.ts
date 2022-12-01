import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateCompanyDto } from "./dto/create-company.dto";
import { Company, CompanyDocument } from "./schemas/company.schema";

@Injectable ()

export class CompanyService {
    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}

    async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
      const createdCompany = new this.companyModel(createCompanyDto);
      return createdCompany.save();
    }
  
    async getAll(): Promise<Company[]> {
      return this.companyModel.find().exec();
    }

    async getOne(id: string): Promise<Company> {
        return this.companyModel.findById(id).exec();
      }

      async getByName(name: string): Promise<Company> {
        return this.companyModel.findOne({name: name})
      }
    
    async edit(id: string, updateCompanyDto: Object): Promise <Company> {
      return this.companyModel.findByIdAndUpdate(id, updateCompanyDto, {new: true})
    }

    async delete(id: string): Promise <Company> {
      return this.companyModel.findByIdAndDelete(id)
    }
}
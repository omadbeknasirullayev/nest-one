import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import {BuildersService} from '../builders/builders.service'
import { HttpExceptionFilter } from 'src/errors/http-exeption.filter';
@Controller('company')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly buildersService: BuildersService
    ) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  getAll() {
    return this.companyService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.companyService.getOne(id);
  }

  @Get('builders/:id')
  getAllBuilders(@Param('id') id: string) {
    return this.buildersService.getAllBuilders(id);
  }

  @Put(':id')
  edit(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.edit(id, updateCompanyDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.companyService.delete(id);
  }
}

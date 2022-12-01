import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CheckCompanyInterseptor } from 'src/interseptors/check-company.interseptor';

import { BuildersService } from './builders.service';
import { CreateBuildersDto } from './dto/create-builders.dto';
import { UpdateBuildersDto } from './dto/update-builders.dto';

@Controller('builders')
export class BuildersController {
  constructor(private readonly buildersService: BuildersService) {}

  @Post()
  @UseInterceptors(CheckCompanyInterseptor)
  @UsePipes(ValidationPipe)
  create(@Body() createBuildersDto: CreateBuildersDto) {
    return this.buildersService.create(createBuildersDto);
  }

  @Get()
  getAll() {
    return this.buildersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.buildersService.getOne(id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  edit(@Param('id') id: string, @Body() updateBuildersDto: UpdateBuildersDto) {
    return this.buildersService.edit(id, updateBuildersDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.buildersService.delete(id);
  }
}

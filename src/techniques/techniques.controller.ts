import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TechniquesService } from "./techniques.service";
import { CreateTechniquesDto } from "./dto/create-techniques.dto"
import { UpdateTechniquesDto } from "./dto/update-techniques.dto"

@Controller ('techniques')

export class TechniquesController {
    constructor (private readonly techniquesService: TechniquesService) {}
    
    @Post()
    create(@Body() createTechniquesDto: CreateTechniquesDto) {
        return this.techniquesService.create(createTechniquesDto)
    }

    @Get()
    getAll() {
        return this.techniquesService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.techniquesService.getOne(id)
    }

    @Put(':id')
    edit(@Param('id') id: string, @Body() updateTechniquesDto: UpdateTechniquesDto) {
        return this.techniquesService.edit(id, updateTechniquesDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.techniquesService.delete(id)
    }
}
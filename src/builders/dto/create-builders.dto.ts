import {IsString, IsNumber, IsMongoId} from 'class-validator'

export class CreateBuildersDto {
    @IsString()
    readonly first_name: string
    @IsString()
    readonly last_name: string
    @IsNumber()
    readonly salary: number
    @IsMongoId()
    readonly company_id: string
}


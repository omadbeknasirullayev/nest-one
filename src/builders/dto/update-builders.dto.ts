import { PartialType } from "@nestjs/mapped-types";
import { CreateBuildersDto } from "./create-builders.dto";

export class UpdateBuildersDto extends PartialType(CreateBuildersDto) {}
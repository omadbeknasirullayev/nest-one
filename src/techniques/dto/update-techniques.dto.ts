import { PartialType } from "@nestjs/mapped-types";
import { CreateTechniquesDto } from "./create-techniques.dto";

export class UpdateTechniquesDto extends PartialType(CreateTechniquesDto) {}
import { IsString } from "class-validator";

export class CreateFacultadeDto {
    @IsString()
    nombre: string;
}

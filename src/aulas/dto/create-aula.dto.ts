import { IsString, IsNotEmpty, IsEnum, IsNumber } from "class-validator";

export class CreateAulaDto {
    @IsNumber()
    capacidad?: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsEnum(['VIRTUAL','FISICA'])
    @IsNotEmpty()
    tipo: string;
}

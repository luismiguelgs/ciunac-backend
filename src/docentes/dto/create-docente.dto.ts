
import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDocenteDto {
    @IsNotEmpty()
    @IsString()
    nombres: string;

    @IsNotEmpty()
    @IsString()
    apellidos: string;

    @IsOptional()
    @IsEnum(['M', 'F'], { message: 'El género debe ser M o F' })
    genero: string;

    @IsOptional()
    @IsString()
    celular: string;

    @IsOptional()
    @IsDateString()
    fechaNacimiento: Date

    @IsOptional()
    @IsBoolean()
    activo: boolean;
}

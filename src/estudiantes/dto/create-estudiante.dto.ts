import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDateString, IsEnum } from 'class-validator';

export class CreateEstudianteDto {
    @IsNotEmpty()
    @IsString()
    nombres: string;

    @IsNotEmpty()
    @IsString()
    apellidos: string;

    @IsNotEmpty()
    @IsEnum(['M', 'F'], { message: 'El género debe ser M o F' })
    genero: string;

    @IsNotEmpty()
    @IsDateString()
    fechaNacimiento: Date

    @IsNotEmpty()
    @IsString()
    tipoDocumento: string;

    @IsNotEmpty()
    @IsString()
    numeroDocumento: string;

    @IsNotEmpty()
    @IsString()
    celular: string;

    @IsOptional()
    @IsString()
    imgDoc: string;

    @IsOptional()
    @IsNumber()
    facultadId?: number;

    @IsOptional()
    @IsNumber()
    escuelaId?: number;

    @IsOptional()
    @IsString()
    direccion: string;

}

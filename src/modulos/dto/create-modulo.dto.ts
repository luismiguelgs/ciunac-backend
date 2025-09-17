import { IsString, IsDateString } from 'class-validator';

export class CreateModuloDto {
    @IsString()
    nombre: string;

    @IsDateString()
    fechaInicio: Date;

    @IsDateString()
    fechaFin: Date;
}

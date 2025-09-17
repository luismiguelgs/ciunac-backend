import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDetallesubicacionDto {
    @IsNotEmpty()
    @IsNumber()
    nivelId: number;

    @IsNotEmpty()
    @IsNumber()
    examenId: number;

    @IsNotEmpty()
    @IsString()
    estudianteId: string;

    @IsNotEmpty()
    @IsNumber()
    nota: number;

    @IsNotEmpty()
    @IsNumber()
    calificacionId: number;

    @IsNotEmpty()
    @IsNumber()
    terminado: boolean;
}

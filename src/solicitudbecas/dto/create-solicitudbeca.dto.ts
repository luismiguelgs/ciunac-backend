import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { EstadoSolicitud } from '../schemas/solicitudbeca.schema';

export class CreateSolicitudbecaDto {
    @IsString()
    nombres: string;

    @IsString()
    apellidos: string;

    @IsString()
    numero_documento: string;

    @IsString()
    facultad: string;

    @IsString()
    escuela: string;

    @IsString()
    codigo: string;

    @IsEmail()
    email: string;

    @IsString()
    periodo: string;

    @IsString()
    carta_de_compromiso: string;

    @IsString()
    historial_academico: string;

    @IsString()
    constancia_matricula: string;

    @IsString()
    contancia_tercio: string;

    @IsString()
    declaracion_jurada: string;

    @IsOptional()
    @IsString()
    observaciones?: string;

    @IsOptional()
    @IsEnum(EstadoSolicitud)
    estado?: EstadoSolicitud;
}

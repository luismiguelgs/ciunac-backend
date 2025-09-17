import { IsBoolean, IsNumber, IsString, IsDateString } from "class-validator";
import { TipoCertificado } from "../schemas/certificado.schema";
import { IsEnum, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class NotaCertificadoDto {
    @IsString()
    ciclo: string;

    @IsString()
    periodo: string;

    @IsBoolean()
    modalidad: boolean;

    @IsNumber()
    nota: number;
}

export class CreateCertificadoDto {
    @IsEnum(TipoCertificado)
    tipo: TipoCertificado;

    @IsString()
    periodo: string;

    @IsString()
    estudiante: string;

    @IsString()
    idioma: string;

    @IsString()
    nivel: string;

    @IsNumber()
    cantidad_horas: number;

    @IsNumber()
    solicitud_id: number;

    @IsDateString()
    fecha_emision: Date;

    @IsString()
    numero_registro: string;

    @IsDateString()
    fecha_concluido: Date;

    @IsBoolean()
    curricula_anterior: boolean;

    @IsBoolean()
    impreso: boolean;

    @IsBoolean()
    duplicado: boolean;

    @IsString()
    certificado_original: string;

    @IsString()
    elaborado_por: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => NotaCertificadoDto)
    notas: NotaCertificadoDto[];
}

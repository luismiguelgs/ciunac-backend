import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSolicitudDto {
    @IsNotEmpty()
    @IsNumber()
    estudianteId: string;

    @IsNotEmpty()
    @IsNumber()
    tipoSolicitudId: number;

    @IsNotEmpty()
    @IsNumber()
    idiomaId: number;

    @IsNotEmpty()
    @IsNumber()
    nivelId: number;

    @IsNotEmpty()
    @IsNumber()
    estadoId: number;

    @IsNotEmpty()
    @IsString()
    periodo: string;

    @IsOptional()
    @IsBoolean()
    trabajador: boolean;

    @IsOptional()
    @IsBoolean()
    alumnoCiunac: boolean;

    @IsOptional()
    @IsDate()
    fechaPago: Date;

    @IsOptional()
    @IsNumber({maxDecimalPlaces: 2})
    pago: number;

    @IsOptional()
    @IsString()
    numeroVoucher: string;

    @IsOptional()
    @IsString()
    imgCertTrabajo: string;

    @IsOptional()
    @IsString()
    imgCertEstudio: string;
}

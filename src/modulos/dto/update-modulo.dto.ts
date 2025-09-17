import { PartialType } from '@nestjs/mapped-types';
import { CreateModuloDto } from './create-modulo.dto';
import { IsString, IsDateString, IsOptional } from 'class-validator';

export class UpdateModuloDto extends PartialType(CreateModuloDto) {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsDateString()
    fechaInicio?: Date;

    @IsOptional()
    @IsDateString()
    fechaFin?: Date;
}

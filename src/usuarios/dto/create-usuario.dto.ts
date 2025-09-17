import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export enum RolUsuario {
  ESTUDIANTE = 'ESTUDIANTE',
  DOCENTE = 'DOCENTE',
  ADMINISTRATIVO = 'ADMINISTRATIVO',
}


export class CreateUsuarioDto {
    @IsEmail({}, {message: 'El email no tiene un formato válido'})
    email: string;

    @IsString()
    @MinLength(6, {message: 'La contraseña debe tener al menos 6 caracteres'})
    password: string;

    @IsEnum(RolUsuario)
    rol: RolUsuario;
}

import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

export enum EstadoReferencia {
  SOLICITUD = 'SOLICITUD',
  EXAMEN_UBICACION = 'EXAMEN_UBICACION',
  CERTIFICADO = 'CERTIFICADO'
}

@Entity('estados')
export class Estado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({
      type: 'enum',
      enum: EstadoReferencia,
      default: EstadoReferencia.SOLICITUD
    })
    referencia: EstadoReferencia;
}

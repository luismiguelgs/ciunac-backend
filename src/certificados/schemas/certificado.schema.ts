import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CertificadoDocument = Certificado & Document;

export enum TipoCertificado {
  FISICO = 'FISICO',
  VIRTUAL = 'VIRTUAL',
}

export class NotaCertificado {
  @Prop({ required: true })
  ciclo: string;

  @Prop({ required: true })
  periodo: string;

  @Prop({ required: true })
  modalidad: boolean;

  @Prop({ required: true })
  nota: number;
}

@Schema({
    collection: 'certificados',
    timestamps: { createdAt: 'creado_en', updatedAt: 'modificado_en' },
})
export class Certificado {
  @Prop({ type: String, enum: TipoCertificado, required: true })
  tipo: TipoCertificado;

  @Prop({ required: true })
  periodo: string;

  @Prop({ required: true })
  estudiante: string;

  @Prop({ required: true })
  idioma: string;

  @Prop({ required: true })
  nivel: string;

  @Prop({ required: true })
  cantidad_horas: number;

  @Prop({ type: Number, required: true })
  solicitud_id: number; // referencia al sistema transaccional (Postgres)

  @Prop({ required: true })
  fecha_emision: Date;

  @Prop({ required: true })
  numero_registro: string;

  @Prop({ required: true })
  fecha_concluido: Date;

  @Prop({ default: false })
  curricula_anterior: boolean;

  @Prop({ default: false })
  impreso: boolean;

  @Prop({ default: false })
  duplicado: boolean;

  @Prop({ required: true })
  certificado_original: string;

  @Prop({ required: true })
  elaborado_por: string;

  @Prop({ type: [NotaCertificado], default: [] })
  notas: NotaCertificado[];
}

export const CertificadoSchema = SchemaFactory.createForClass(Certificado);

import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Tipossolicitud } from "src/tipossolicitud/entities/tipossolicitud.entity";
import { Idioma } from "src/idiomas/entities/idioma.entity";
import { Nivel } from "src/niveles/entities/nivel.entity";
import { Estado } from "src/estados/entities/estado.entity";

@Entity('solicitudes')
export class Solicitud {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'estudiante_id' })
    estudianteId: string;

    @Column({ name: 'tipo_solicitud_id' })
    tipoSolicitudId: number;

    @Column({ name: 'idioma_id', nullable: false })
    idiomaId: number;

    @Column({ name: 'nivel_id', nullable: false })
    nivelId: number;

    @Column({ name: 'estado_id', nullable: false })
    estadoId: number;

    @Column()
    periodo: string;

    @Column({ default: false })
    trabajador: boolean;

    @Column({ name: 'alumno_ciunac', default: false })
    alumnoCiunac: boolean;

    @Column({ name: 'fecha_pago' })
    fechaPago: Date;

    @Column({type: 'decimal', precision: 5, scale: 2, nullable: false })
    pago: number;

    @Column({name:'numero_voucher'})
    numeroVoucher: string;

    @Column({name:'img_cert_trabajo'})
    imgCertTrabajo: string;

    @Column({name:'img_cert_estudio'})
    imgCertEstudio: string;

    @Column({name: 'creado_en'})
    creadoEn: Date;

    @Column({name: 'modificado_en'})
    modificadoEn: Date;

    //relaciones
    @ManyToOne(() => Estudiante)
    @JoinColumn({ name: 'estudiante_id' })
    estudiante: Estudiante;     

    @ManyToOne(() => Tipossolicitud)
    @JoinColumn({ name: 'tipo_solicitud_id' })
    tipossolicitud: Tipossolicitud;

    @ManyToOne(() => Idioma)
    @JoinColumn({ name: 'idioma_id' })
    idioma: Idioma;

    @ManyToOne(() => Nivel)
    @JoinColumn({ name: 'nivel_id' })
    nivel: Nivel;

    @ManyToOne(() => Estado)
    @JoinColumn({ name: 'estado_id' })
    estado: Estado;
}

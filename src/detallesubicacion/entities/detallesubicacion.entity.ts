import { Nivel } from 'src/niveles/entities/nivel.entity';
import { Examenesubicacion } from 'src/examenesubicacion/entities/examenesubicacion.entity';
import { Calificacionesubicacion } from 'src/calificacionesubicacion/entities/calificacionesubicacion.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';

@Entity('detalles_ubicacion')
export class Detallesubicacion {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({name:'nivel_id', nullable: false})
	nivelId: number;

	@Column({name:'examen_id', nullable: false})
	examenId: number;

    @Column({name:'estudiante_id', nullable: false})
    estudianteId: string;

    @Column({name:'nota', nullable: false})
    nota: number;

    @Column({name:'calificacion_id', nullable: false})
    calificacionId: number;

    @Column({name:'terminado', nullable: false})
    terminado: boolean;

    @Column({ name: 'creado_en', default: () => 'CURRENT_TIMESTAMP' })
    creadoEn: Date;

    @Column({ name: 'modificado_en', default: () => 'CURRENT_TIMESTAMP' })
    modificadoEn: Date;

    //Relaciones
    @ManyToOne(() => Nivel)
    @JoinColumn({ name: 'nivel_id' })
    nivel: Nivel;  
    
    @ManyToOne(() => Estudiante)
    @JoinColumn({ name: 'estudiante_id' })
    estudiante: Estudiante;

    @ManyToOne(() => Examenesubicacion)
    @JoinColumn({ name: 'examen_id' })
    examen: Examenesubicacion;      

    @ManyToOne(() => Calificacionesubicacion)
    @JoinColumn({ name: 'calificacion_id' })
    calificacion: Calificacionesubicacion; 
}

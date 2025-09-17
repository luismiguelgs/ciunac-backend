
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Ciclo } from '../../ciclos/entities/ciclo.entity';
import { Docente } from '../../docentes/entities/docente.entity';
import { Modulo } from 'src/modulos/entities/modulo.entity';
import { Aula } from 'src/aulas/entities/aula.entity';

@Entity('grupos')
export class Grupo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codigo: string;

    @CreateDateColumn({ name: 'creado_en' })
    creadoEn: Date;

    @UpdateDateColumn({ name: 'modificado_en' })
    modificadoEn: Date;

    // Relaciones
    @ManyToOne(() => Modulo, (modulo) => modulo.grupos, { eager: true })
    @JoinColumn({ name: 'modulos_id' })
    modulo: Modulo;

    @ManyToOne(() => Ciclo)
    @JoinColumn({ name: 'ciclo_id' })
    ciclo: Ciclo;

    @ManyToOne(() => Docente)
    @JoinColumn({ name: 'docente_id' })
    docente: Docente;

    @ManyToOne(() => Aula)
    @JoinColumn({ name: 'aula_id' })
    aula: Aula;
}

import { Ciclo } from 'src/ciclos/entities/ciclo.entity';
import { Idioma } from 'src/idiomas/entities/idioma.entity';
import { Nivel } from 'src/niveles/entities/nivel.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('calificaciones_ubicacion')
export class Calificacionesubicacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'idioma_id', nullable: false})
    idiomaId: number;

    @Column({name:'nivel_id', nullable: false})
    nivelId: number;

    @Column({name:'ciclo_id', nullable: false})
    cicloId: number;

    @Column({name:'nota_min', nullable: false})
    notaMin: number;

    @Column({name:'nota_max', nullable: false})
    notaMax: number;

    //relaciones
    @ManyToOne(() => Idioma)
    @JoinColumn({name:'idioma_id'})
    idioma: Idioma;

    @ManyToOne(() => Nivel)
    @JoinColumn({name:'nivel_id'})
    nivel: Nivel;

    @ManyToOne(() => Ciclo)
    @JoinColumn({name:'ciclo_id'})
    ciclo: Ciclo;
}

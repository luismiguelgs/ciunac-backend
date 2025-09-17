import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { Estudiante } from "../../estudiantes/entities/estudiante.entity";
import { Docente } from "src/docentes/entities/docente.entity";

export type Provider = 'local' | 'google' | 'facebook';
export type Rol = 'estudiante' | 'docente' | 'admin';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ unique: true })
    email: string;
    
    @Column({nullable: true})
    password?: string;

    @Column({type: 'varchar', name: 'proveedor', default: 'local'})
    provider: Provider;

    @Column({nullable: true, name: 'proveedor_id'})
    providerId?: string;

    @Column({type: 'varchar', nullable: true, name: 'refresh_token_hash'})
    refreshTokenHash? : string | null

    @Column({type: 'varchar', default: 'estudiante'})
    rol: string;

    @CreateDateColumn({name: 'creado_en'})
    creadoEn: Date;

    @UpdateDateColumn({name: 'modificado_en'})
    modificadoEn: Date;

    @OneToOne(() => Estudiante, (estudiante) => estudiante.usuario)
    estudiante: Estudiante;

    @OneToOne(() => Docente, (docente) => docente.usuario)
    docente: Docente;
}

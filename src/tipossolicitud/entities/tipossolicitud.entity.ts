import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipos_solicitud')
export class Tipossolicitud {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    solicitud: string;
}

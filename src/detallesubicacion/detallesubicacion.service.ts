import { Injectable } from '@nestjs/common';
import { CreateDetallesubicacionDto } from './dto/create-detallesubicacion.dto';
import { UpdateDetallesubicacionDto } from './dto/update-detallesubicacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Detallesubicacion } from './entities/detallesubicacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetallesubicacionService {
	constructor(
		@InjectRepository(Detallesubicacion)
		private readonly detallesubicacionRepository: Repository<Detallesubicacion>,
	) {}

	async create(createDetallesubicacionDto: CreateDetallesubicacionDto) : Promise<Detallesubicacion> {
		const detallesubicacion = this.detallesubicacionRepository.create(createDetallesubicacionDto);
		return this.detallesubicacionRepository.save(detallesubicacion);
	}

	async findAll() : Promise<Detallesubicacion[]> {
		return this.detallesubicacionRepository.find({
			relations: ['nivel', 'examen', 'estudiante', 'calificacion'],
		});
	}

	async findOne(id: number) : Promise<Detallesubicacion | null> {
		return this.detallesubicacionRepository.findOne({
			where: { id },
			relations: ['nivel', 'examen', 'estudiante', 'calificacion'],
		});
	}

	async update(id: number, updateDetallesubicacionDto: UpdateDetallesubicacionDto) : Promise<Detallesubicacion | null> {
		const detallesubicacion = await this.findOne(id);
		if (!detallesubicacion) {
			return null;
		}
		return this.detallesubicacionRepository.save({
			...detallesubicacion,
			...updateDetallesubicacionDto,
		});
	}

	async remove(id: number) : Promise<boolean> {
		const detallesubicacion = await this.findOne(id);
		if (!detallesubicacion) {
			return false;
		}
		await this.detallesubicacionRepository.delete(id);
		return true;
	}
}

import { Injectable } from '@nestjs/common';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Solicitud } from './entities/solicitud.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudesService {
	constructor(
		@InjectRepository(Solicitud)
		private solicitudRepository: Repository<Solicitud>,
	) {}

	async create(createSolicitudDto: CreateSolicitudDto) : Promise<Solicitud> {
		const item = this.solicitudRepository.create(createSolicitudDto);
		return await this.solicitudRepository.save(item);
	}

	async findAll() : Promise<Solicitud[]> {
		return await this.solicitudRepository.find({
			relations:['estudiante','tiposSolicitud','idioma','nivel','estado'],
		});
	}

	async findOne(id: number) : Promise<Solicitud | null> {
		return await this.solicitudRepository.findOne({
			where:{id},
			relations:['estudiante','tiposSolicitud','idioma','nivel','estado'],
		});
	}

	async update(id: number, updateSolicitudDto: UpdateSolicitudDto) : Promise<Solicitud | null> {
		const item = await this.findOne(id)
		if (!item) {
			return null;
		}
		await this.solicitudRepository.update(id, updateSolicitudDto);
		return await this.findOne(id);
	}

	// Buscar solicitudes por numero_documento del estudiante
	async findByNumeroDocumento(numeroDocumento: string) : Promise<Solicitud[]> {
		return await this.solicitudRepository.find({
			relations: ['estudiante', 'tiposSolicitud', 'idioma', 'nivel', 'estado'],
			where: {
				estudiante: {
					numeroDocumento,
				},
			},
		});
	}

	// 🟢 CERTIFICADOS (Físico = 1,2, Digital = 3,4)
	async findCertificadosPorEstado(estadoId: number): Promise<Solicitud[]> 
	{	
		try {
			const certificados = await this.solicitudRepository.find({
				where: [
					{ tipoSolicitudId: 1, estadoId },
					{ tipoSolicitudId: 2, estadoId },
					{ tipoSolicitudId: 3, estadoId },
					{ tipoSolicitudId: 4, estadoId },
				],
				relations: ['estudiante', 'estado', 'tiposSolicitud', 'idioma', 'nivel'],
				order: { id: 'DESC' },
			});
			// console.log('🟢 Encontrados', certificados.length, 'certificados');
			return certificados;
		} catch (error) {
			console.error('❌ Error al buscar certificados:', error.message);
  			console.error(error.stack);
  			throw new Error(`Error interno: ${error.message}`);
		}
	}

	// 🟡 CONSTANCIAS (Ejemplo: id 5 y 6)
	async findConstanciasPorEstado(estadoId: number): Promise<Solicitud[]> {
		return this.solicitudRepository.find({
			where: [
				{ tipoSolicitudId: 5, estadoId },
				{ tipoSolicitudId: 6, estadoId },
			],
			relations: ['estudiante', 'estado', 'tiposSolicitud', 'idioma', 'nivel'],
			order: { id: 'DESC' },
		});
	}
	// 🔵 EXÁMENES DE UBICACIÓN (Ejemplo: id 7)
	async findExamenesPorEstado(estadoId: number): Promise<Solicitud[]> {
		return this.solicitudRepository.find({
			where: { tipoSolicitudId: 7, estadoId },
			relations: ['estudiante', 'estado', 'tiposSolicitud', 'idioma', 'nivel'],
			order: { id: 'DESC' },
		});
	}

	async remove(id: number): Promise<Solicitud | null> {
		const item = await this.findOne(id);

		if (!item) {
			return null;
		}

		// Cambiar el estado a rechazado (id = 5)
		item.estado = { id: 5 } as any; // 👈 le asignamos un Estado por id

		await this.solicitudRepository.save(item);
		return item;
	}
}

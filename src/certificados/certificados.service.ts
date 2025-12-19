import { Injectable } from '@nestjs/common';
import { CreateCertificadoDto } from './dto/create-certificado.dto';
import { UpdateCertificadoDto } from './dto/update-certificado.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Certificado, CertificadoDocument } from './schemas/certificado.schema';
import { Model } from 'mongoose';

@Injectable()
export class CertificadosService {
	constructor(
		@InjectModel(Certificado.name) 
		private certificadoModel: Model<CertificadoDocument>
	) {}

	async create(createCertificadoDto: CreateCertificadoDto) : Promise<Certificado> {
		const createdCertificado = new this.certificadoModel(createCertificadoDto);
		return createdCertificado.save();
	}

	async findAll() : Promise<Certificado[]> {
		return this.certificadoModel.find().exec();
	}

	async findBySolicitudId(solicitudId: number) : Promise<Certificado | null> {
		return this.certificadoModel.findOne({ solicitudId }).exec();
	}

	async findByImpreso(impreso: boolean) : Promise<Certificado[]> {
		return this.certificadoModel
			.find({ impreso }) // Filtrar por impreso true o false
			.sort({ fechaEmision: -1 }) // Ordenar por fecha de emisión descendente
			.exec();
	}

	async findOne(id: string) : Promise<Certificado | null> {
		return this.certificadoModel.findOne({ _id: id }).exec();
	}
	async update(id: string, updateCertificadoDto: UpdateCertificadoDto) : Promise<Certificado | null> {
		return this.certificadoModel.findByIdAndUpdate(
			{_id:id}, 
			updateCertificadoDto, 
			{ new: true }
		).exec();
	}
	async remove(id: string) : Promise<Certificado | null> {
		return this.certificadoModel.findByIdAndDelete({ _id: id }).exec();
	}
}

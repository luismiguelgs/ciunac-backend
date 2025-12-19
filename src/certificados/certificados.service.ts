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

	// Función auxiliar para normalizar el ID
	private mapId(doc: any) {
		if (!doc) return null;
		
		// Si el documento es un array (para findAll)
		if (Array.isArray(doc)) {
		return doc.map(item => this.mapId(item));
		}

		// Convertimos _id a string (funciona con el String de Firebase y el ObjectId de Mongo)
		const idString = doc._id ? doc._id.toString() : null;
		
		return {
		...doc,
		_id: idString,
		id: idString,
		};
	}

	async create(createCertificadoDto: CreateCertificadoDto) : Promise<Certificado> {
		const created = new this.certificadoModel(createCertificadoDto);
		const doc = await created.save();
		return this.mapId(doc.toObject());
	}

	async findAll() : Promise<Certificado[]> {
		const certificados = await this.certificadoModel.find().lean().exec();
    	return certificados.map(cert => this.mapId(cert));
	}

	async findBySolicitudId(solicitudId: number) : Promise<Certificado | null> {
	  const certificado = await this.certificadoModel
		.findOne({ solicitudId })
		.lean()
		.exec();

  // 2. Usamos la función de mapeo para asegurar que _id e id existan como string
  return this.mapId(certificado);
	}

	async findByImpreso(impreso: boolean) : Promise<Certificado[]> {
		const certificados = await this.certificadoModel
			.find({ impreso })
			.sort({ fechaEmision: -1 })
			.lean()
			.exec();
		return certificados.map(cert => this.mapId(cert));
	}

	async findOne(id: string) : Promise<Certificado | null> {
		const certificado = await this.certificadoModel.findOne({ _id: id }).lean().exec();
    	return this.mapId(certificado);
	}
	async update(id: string, updateCertificadoDto: UpdateCertificadoDto) : Promise<Certificado | null> {
		const updated = await this.certificadoModel
			.findOneAndUpdate({ _id: id }, updateCertificadoDto, { new: true })
			.lean()
			.exec();
		return this.mapId(updated);
	}
	async remove(id: string) : Promise<Certificado | null> {
		const deleted = await this.certificadoModel
			.findOneAndDelete({ _id: id })
			.lean()
			.exec();
		return this.mapId(deleted);
	}
}

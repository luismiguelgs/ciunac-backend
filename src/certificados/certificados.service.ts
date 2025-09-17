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
	async findOne(id: string) : Promise<Certificado | null> {
		return this.certificadoModel.findById(id).exec();
	}
	async update(id: string, updateCertificadoDto: UpdateCertificadoDto) : Promise<Certificado | null> {
		return this.certificadoModel.findByIdAndUpdate(id, updateCertificadoDto, { new: true }).exec();
	}
	async remove(id: string) : Promise<Certificado | null> {
		return this.certificadoModel.findByIdAndDelete(id).exec();
	}
}

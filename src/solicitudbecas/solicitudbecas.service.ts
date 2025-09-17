import { Injectable } from '@nestjs/common';
import { CreateSolicitudbecaDto } from './dto/create-solicitudbeca.dto';
import { UpdateSolicitudbecaDto } from './dto/update-solicitudbeca.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SolicitudBeca, SolicitudBecaDocument } from './schemas/solicitudbeca.schema';

@Injectable()
export class SolicitudbecasService {
	constructor(
		@InjectModel(SolicitudBeca.name) 
		private solicitudBecaModel: Model<SolicitudBecaDocument>
	) {}

	async create(createSolicitudbecaDto: CreateSolicitudbecaDto) : Promise<SolicitudBeca>{
		const createdSolicitudBeca = new this.solicitudBecaModel(createSolicitudbecaDto);
		return createdSolicitudBeca.save();
	}

	async findAll() : Promise<SolicitudBeca[]> {
		return this.solicitudBecaModel.find().exec();
	}

	async findOne(id: number) : Promise<SolicitudBeca | null> {
		return this.solicitudBecaModel.findById(id).exec();
	}

	async update(id: number, updateSolicitudbecaDto: UpdateSolicitudbecaDto) : Promise<SolicitudBeca | null> {
		return this.solicitudBecaModel.findByIdAndUpdate(id, updateSolicitudbecaDto, { new: true });
	}

	async remove(id: number) : Promise<SolicitudBeca | null> {
		return this.solicitudBecaModel.findByIdAndDelete(id);
	}
}

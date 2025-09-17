import { Injectable } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Modulo } from './entities/modulo.entity';

@Injectable()
export class ModulosService {
	constructor(
    @InjectRepository(Modulo)
    private readonly repo: Repository<Modulo>,
  	) {}

	create(createModuloDto: CreateModuloDto) {
		const nuevo = this.repo.create(createModuloDto);
    	return this.repo.save(nuevo);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({
			where: {
				id,
			},
		});
	}

	async update(id: number, updateModuloDto: UpdateModuloDto) {
		await this.repo.update(id, updateModuloDto);
    	return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete(id);
	}
}

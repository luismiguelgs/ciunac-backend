import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConstanciasService } from './constancias.service';
import { CreateConstanciaDto } from './dto/create-constancia.dto';
import { UpdateConstanciaDto } from './dto/update-constancia.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('constancias')
export class ConstanciasController {
	constructor(private readonly constanciasService: ConstanciasService) {}
	
	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() createConstanciaDto: CreateConstanciaDto) {
		return this.constanciasService.create(createConstanciaDto);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.constanciasService.findAll();
	}
	
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.constanciasService.findOne(id);
	}
	
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateConstanciaDto: UpdateConstanciaDto) {
		return this.constanciasService.update(id, updateConstanciaDto);
	}
	
	/* las constancias no se borran
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.constanciasService.remove(id);
	}
	*/
}

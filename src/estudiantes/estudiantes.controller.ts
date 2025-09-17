import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('estudiantes')
export class EstudiantesController {
	constructor(private readonly estudiantesService: EstudiantesService) {}

	@Post()
	create(@Body() createEstudianteDto: CreateEstudianteDto) {
		return this.estudiantesService.create(createEstudianteDto);
	}

	@Get()
	findAll() {
		return this.estudiantesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.estudiantesService.findOne(id);
	}
	@Get('/bucar/:dni')
	findByDni(@Param('dni') dni: string) {
		return this.estudiantesService.findByDni(dni);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
		return this.estudiantesService.update(id, updateEstudianteDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.estudiantesService.remove(id);
	}
}

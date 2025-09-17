import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ActanotasService } from './actanotas.service';
import { CreateActaNotaDto } from './dto/create-actanota.dto';
import { UpdateActaNotaDto } from './dto/update-actanota.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('actanotas')
export class ActanotasController {
	constructor(private readonly actanotasService: ActanotasService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() createActanotaDto: CreateActaNotaDto) {
		return this.actanotasService.create(createActanotaDto);
	}

	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.actanotasService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.actanotasService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateActanotaDto: UpdateActaNotaDto) {
		return this.actanotasService.update(id, updateActanotaDto);
	}
	/* Acta de notas no se puede borrar
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.actanotasService.remove(id);
	}
	*/
}

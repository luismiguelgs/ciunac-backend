import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('aulas')
export class AulasController {
  constructor(private readonly aulasService: AulasService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() createAulaDto: CreateAulaDto) {
		return this.aulasService.create(createAulaDto);
	}
	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.aulasService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.aulasService.findOne(+id);
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateAulaDto: UpdateAulaDto) {
		return this.aulasService.update(+id, updateAulaDto);
	}
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.aulasService.remove(+id);
	}
}

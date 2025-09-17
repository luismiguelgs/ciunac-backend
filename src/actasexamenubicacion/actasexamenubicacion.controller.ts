import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ActasexamenubicacionService } from './actasexamenubicacion.service';
import { CreateActasexamenubicacionDto } from './dto/create-actasexamenubicacion.dto';
import { UpdateActasexamenubicacionDto } from './dto/update-actasexamenubicacion.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('actasexamenubicacion')
export class ActasexamenubicacionController {
	constructor(private readonly actasexamenubicacionService: ActasexamenubicacionService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() createActasexamenubicacionDto: CreateActasexamenubicacionDto) {
		return this.actasexamenubicacionService.create(createActasexamenubicacionDto);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.actasexamenubicacionService.findAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.actasexamenubicacionService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateActasexamenubicacionDto: UpdateActasexamenubicacionDto) {
		return this.actasexamenubicacionService.update(id, updateActasexamenubicacionDto);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.actasexamenubicacionService.remove(id);
	}
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudbecasService } from './solicitudbecas.service';
import { CreateSolicitudbecaDto } from './dto/create-solicitudbeca.dto';
import { UpdateSolicitudbecaDto } from './dto/update-solicitudbeca.dto';
import { UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
//import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

//@UseGuards(JwtAuthGuard)
@UseGuards(ApiKeyGuard)		
@Controller('solicitudbecas')
export class SolicitudbecasController {
	constructor(private readonly solicitudbecasService: SolicitudbecasService) {}

	@Post()
	create(@Body() createSolicitudbecaDto: CreateSolicitudbecaDto) {
		return this.solicitudbecasService.create(createSolicitudbecaDto);
	}

	@Get()
	findAll() {
		return this.solicitudbecasService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.solicitudbecasService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateSolicitudbecaDto: UpdateSolicitudbecaDto) {
		return this.solicitudbecasService.update(+id, updateSolicitudbecaDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.solicitudbecasService.remove(+id);
	}
}

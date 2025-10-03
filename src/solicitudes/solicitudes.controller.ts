import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { Solicitud } from './entities/solicitud.entity';
//import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

//@UseGuards(JwtAuthGuard)
@UseGuards(ApiKeyGuard)		
@Controller('solicitudes')
export class SolicitudesController {
	constructor(private readonly solicitudesService: SolicitudesService) {}

	@Post()
	create(@Body() createSolicitudDto: CreateSolicitudDto) {
		return this.solicitudesService.create(createSolicitudDto);
	}

	@Get()
	findAll() {
		return this.solicitudesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.solicitudesService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateSolicitudDto: UpdateSolicitudDto) {
		return this.solicitudesService.update(+id, updateSolicitudDto); 
	}

	// Buscar solicitudes por numero_documento del estudiante
	@Get('documento/:numeroDocumento')
	findByNumeroDocumento(@Param('numeroDocumento') numeroDocumento: string) : Promise<Solicitud[]> {
		return this.solicitudesService.findByNumeroDocumento(numeroDocumento);
	}

	// Buscar solicitudes por estado_id
	@Get('estado/:estadoId')
	findByEstadoId(@Param('estadoId') estadoId: string) : Promise<Solicitud[]> {
		return this.solicitudesService.findByEstadoId(+estadoId);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.solicitudesService.remove(+id);
	}
}

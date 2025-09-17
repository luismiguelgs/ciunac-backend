import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CertificadosService } from './certificados.service';
import { CreateCertificadoDto } from './dto/create-certificado.dto';
import { UpdateCertificadoDto } from './dto/update-certificado.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('certificados')
export class CertificadosController {
	constructor(private readonly certificadosService: CertificadosService) {}

	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Body() createCertificadoDto: CreateCertificadoDto) {
		return this.certificadosService.create(createCertificadoDto);
	}
	
	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.certificadosService.findAll();
	}
	
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.certificadosService.findOne(id);
	}
	
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCertificadoDto: UpdateCertificadoDto) {
		return this.certificadosService.update(id, updateCertificadoDto);
	}
	
	/* no se pueden borrar certificados
	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.certificadosService.remove(id);
	}
	*/
}

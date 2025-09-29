import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CertificadosService } from './certificados.service';
import { CreateCertificadoDto } from './dto/create-certificado.dto';
import { UpdateCertificadoDto } from './dto/update-certificado.dto';
//import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';

//@UseGuards(JwtAuthGuard)
@UseGuards(ApiKeyGuard)		
@Controller('certificados')
export class CertificadosController {
	constructor(private readonly certificadosService: CertificadosService) {}

	@Post()
	create(@Body() createCertificadoDto: CreateCertificadoDto) {
		return this.certificadosService.create(createCertificadoDto);
	}
	
	@Get()
	findAll() {
		return this.certificadosService.findAll();
	}
	
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.certificadosService.findOne(id);
	}
	
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

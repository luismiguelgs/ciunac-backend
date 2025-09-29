import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CiclosService } from './ciclos.service';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';
//import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';

//@UseGuards(JwtAuthGuard)
@UseGuards(ApiKeyGuard)		
@Controller('ciclos')
export class CiclosController {
	constructor(private readonly ciclosService: CiclosService) {}
	
	@Post()
	create(@Body() createCicloDto: CreateCicloDto) {
		return this.ciclosService.create(createCicloDto);
	}
	
	@Get()
	findAll() {
		return this.ciclosService.findAll();
	}
	
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.ciclosService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateCicloDto: UpdateCicloDto) {
		return this.ciclosService.update(+id, updateCicloDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.ciclosService.remove(+id);
	}
}

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Q10Service } from './q10.service';
import { Q10EstudianteDto } from './dto/q10-estudiante.dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('q10')
export class Q10Controller {
    constructor(private readonly q10Service: Q10Service) {}

	@Post('estudiantes')
    async register(@Body() body: Q10EstudianteDto) {
        return this.q10Service.crearEstudianteEnQ10(body);
    }
}

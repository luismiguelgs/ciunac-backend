import { Module } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesController } from './solicitudes.controller';
import { Solicitud } from './entities/solicitud.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';
import { Tipossolicitud } from 'src/tipossolicitud/entities/tipossolicitud.entity';
import { Idioma } from 'src/idiomas/entities/idioma.entity';
import { Nivel } from 'src/niveles/entities/nivel.entity';
import { Estado } from 'src/estados/entities/estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Solicitud,
    Estudiante,
    Tipossolicitud,
    Idioma,
    Nivel,
    Estado,
  ])],
  controllers: [SolicitudesController],
  providers: [SolicitudesService],
})
export class SolicitudesModule {}

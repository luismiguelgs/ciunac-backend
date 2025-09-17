import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nota } from './entities/nota.entity';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';
import { Grupo } from 'src/grupos/entities/grupo.entity';
import { Evaluacion } from 'src/evaluaciones/entities/evaluacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Nota,
    Estudiante,
    Grupo,
    Evaluacion,
  ])],
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}

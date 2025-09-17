import { Module } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { GruposController } from './grupos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './entities/grupo.entity';
import { Modulo } from 'src/modulos/entities/modulo.entity';
import { Ciclo } from 'src/ciclos/entities/ciclo.entity';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Aula } from 'src/aulas/entities/aula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Grupo, 
    Modulo, 
    Ciclo, 
    Docente, 
    Aula
  ])],
  controllers: [GruposController],
  providers: [GruposService],
})
export class GruposModule {}

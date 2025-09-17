import { Module } from '@nestjs/common';
import { CiclosService } from './ciclos.service';
import { CiclosController } from './ciclos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciclo } from './entities/ciclo.entity';
import { Idioma } from 'src/idiomas/entities/idioma.entity';
import { Nivel } from 'src/niveles/entities/nivel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Ciclo,
    Idioma,
    Nivel
  ])],
  controllers: [CiclosController],
  providers: [CiclosService],
})
export class CiclosModule {}

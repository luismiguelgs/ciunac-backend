import { Module } from '@nestjs/common';
import { Q10Service } from './q10.service';
import { Q10Controller } from './q10.controller';
import { EstudiantesModule } from 'src/estudiantes/estudiantes.module';

@Module({
    imports: [EstudiantesModule],
    controllers: [Q10Controller],
    providers: [Q10Service],
})
export class Q10Module {}
 
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { EscuelasModule } from './escuelas/escuelas.module';
import { ModulosModule } from './modulos/modulos.module';
import { FacultadesModule } from './facultades/facultades.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { IdiomasModule } from './idiomas/idiomas.module';
import { DocentesModule } from './docentes/docentes.module';
import { NivelesModule } from './niveles/niveles.module';
import { CiclosModule } from './ciclos/ciclos.module';
import { GruposModule } from './grupos/grupos.module';
import { AulasModule } from './aulas/aulas.module';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';
import { NotasModule } from './notas/notas.module';
import { NotasfinalModule } from './notasfinal/notasfinal.module';
import { TipossolicitudModule } from './tipossolicitud/tipossolicitud.module';
import { EstadosModule } from './estados/estados.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { ExamenesubicacionModule } from './examenesubicacion/examenesubicacion.module';
import { CalificacionesubicacionModule } from './calificacionesubicacion/calificacionesubicacion.module';
import { DetallesubicacionModule } from './detallesubicacion/detallesubicacion.module';
import { CronogramaubicacionModule } from './cronogramaubicacion/cronogramaubicacion.module';
import { LogsModule } from './logs/logs.module';
import { TextosModule } from './textos/textos.module';
import { ActanotasModule } from './actanotas/actanotas.module';
import { ActasexamenubicacionModule } from './actasexamenubicacion/actasexamenubicacion.module';
import { SolicitudbecasModule } from './solicitudbecas/solicitudbecas.module';
import { ConstanciasModule } from './constancias/constancias.module';
import { CertificadosModule } from './certificados/certificados.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true,
		}),
		PassportModule,
		JwtModule.register({
			secret: process.env.JWT_ACCESS_SECRET,
			signOptions: { expiresIn: '60m' },
		}),
		// PostgreSQL con TypeORM
    	TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (config: ConfigService) => ({
				type: 'postgres',
				host: config.get('POSTGRES_HOST'),
				port: +(config.get<number>('POSTGRES_PORT') ?? 5432),
				username: config.get('POSTGRES_USER'),
				password: config.get('POSTGRES_PASSWORD'),
				database: config.get('POSTGRES_DB'),
				autoLoadEntities: true,
				synchronize: false, // true solo si no tienes datos reales
			}),
    	}),
		// MongoDB connection
    	MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (config: ConfigService) => ({
				uri: config.get<string>('MONGO_URI'),
			}),
    	}),
		EscuelasModule,
		UsuariosModule,
		ModulosModule,
		FacultadesModule,
		EstudiantesModule,
		EscuelasModule,
		IdiomasModule,
		DocentesModule,
		NivelesModule,
		CiclosModule,
		GruposModule,
		AulasModule,
		EvaluacionesModule,
		NotasModule,
		NotasfinalModule,
		TipossolicitudModule,
		EstadosModule,
		SolicitudesModule,
		ExamenesubicacionModule,
		CalificacionesubicacionModule,
		DetallesubicacionModule,
		CronogramaubicacionModule,
		LogsModule,
		TextosModule,
		ActanotasModule,
		ActasexamenubicacionModule,
		SolicitudbecasModule,
		ConstanciasModule,
		CertificadosModule,
		AuthModule,
		UploadModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator";


export class CreateTipossolicitudDto {
    @IsNotEmpty({message: 'La solicitud es requerida'})
    @IsString()
    solicitud: string;
}

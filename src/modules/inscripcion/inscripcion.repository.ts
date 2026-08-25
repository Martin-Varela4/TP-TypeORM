import { AppDataSource } from "../../database/data-source";
import { Inscripcion } from "./inscripcion.entity";

export const InscripcionRepository = AppDataSource.getRepository(Inscripcion);
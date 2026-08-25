import { AppDataSource } from "../../database/data-source";
import { Alumno } from "./alumno.entity";

export const AlumnoRepository = AppDataSource.getRepository(Alumno);
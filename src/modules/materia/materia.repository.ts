import { AppDataSource } from "../../database/data-source";
import { Materia } from "./materia.entity";

export const MateriaRepository = AppDataSource.getRepository(Materia);
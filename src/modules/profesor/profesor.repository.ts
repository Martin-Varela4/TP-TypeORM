import { AppDataSource } from "../../database/data-source";
import { Profesor } from "./profesor.entity";

export const ProfesorRepository = AppDataSource.getRepository(Profesor);
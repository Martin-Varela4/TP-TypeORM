import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { Usuario } from "../modules/usuarios/usuario.entity";
import { Alumno } from "../modules/alumnos/alumno.entity";
import { Profesor } from "../modules/profesor/profesor.entity";
import { Materia } from "../modules/materia/materia.entity";
import { Inscripcion } from "../modules/inscripcion/inscripcion.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 8889,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "escuela_db",
  synchronize: true, 
  logging: true,     
  entities: [Usuario, Alumno, Profesor, Materia, Inscripcion],
});
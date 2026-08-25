import "reflect-metadata";
import dotenv from "dotenv";
import { AppDataSource } from "./database/data-source"; 

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("Conexión establecida.");
    process.exit(0); 
  })
  .catch((err: Error) => {
    console.error("Error al conectar a la base de datos:", err);
    process.exit(1);
  });
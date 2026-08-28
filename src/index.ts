import express from "express";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Base de datos conectada");

        app.listen(3000, () => {
            console.log("Servidor ejecutándose en http://localhost:3000");
        });
    })
    .catch((error) => {
        console.error("Error al conectar con la base de datos:", error);
    });
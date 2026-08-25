import { Router } from "express";
import { UsuarioController } from "../usuarios/usuario.controller";

const router = Router();

router.get("/", UsuarioController.getAll);
router.get("/:id", UsuarioController.getById);
router.post("/", UsuarioController.create);

export default router;
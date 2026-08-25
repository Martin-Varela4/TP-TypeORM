import { Request, Response } from "express";
import { UsuarioService } from "../usuarios/usuario.service";

const service = new UsuarioService();

export class UsuarioController {
  static async getAll(req: Request, res: Response) {
    const usuarios = await service.getAll();
    res.json(usuarios);
  }

  static async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const usuario = await service.getById(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(usuario);
  }

  static async create(req: Request, res: Response) {
    const usuario = await service.create(req.body);
    res.status(201).json(usuario);
  }
}
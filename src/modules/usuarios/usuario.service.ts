import { UsuarioRepository } from "../usuarios/usuario.repository";
import { Usuario } from "../usuarios/usuario.entity";

export class UsuarioService {
  async getAll(): Promise<Usuario[]> {
    return await UsuarioRepository.find();
  }

  async getById(id: number): Promise<Usuario | null> {
    return await UsuarioRepository.findOneBy({ id });
  }

  async create(data: Partial<Usuario>): Promise<Usuario> {
    const usuario = UsuarioRepository.create(data);
    return await UsuarioRepository.save(usuario);
  }
}


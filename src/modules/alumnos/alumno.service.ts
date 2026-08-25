import { AlumnoRepository } from "./alumno.repository";
import { Alumno } from "./alumno.entity";

export class AlumnoService {
  async getAll(): Promise<Alumno[]> {
    return await AlumnoRepository.find({ relations: ["usuario", "inscripciones"] });
  }

  async getById(id: number): Promise<Alumno | null> {
    return await AlumnoRepository.findOne({
      where: { id },
      relations: ["usuario", "inscripciones"],
    });
  }

  async create(data: Partial<Alumno>): Promise<Alumno> {
    const alumno = AlumnoRepository.create(data);
    return await AlumnoRepository.save(alumno);
  }

  async update(id: number, data: Partial<Alumno>): Promise<Alumno | null> {
    await AlumnoRepository.update(id, data);
    return this.getById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await AlumnoRepository.delete(id);
    return result.affected !== 0;
  }
}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Materia } from "../materia/materia.entity";

@Entity("profesores")
export class Profesor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column({ unique: true })
  legajo!: number;

  @OneToMany(() => Materia, (materia) => materia.profesor)
  materias!: Materia[];
}
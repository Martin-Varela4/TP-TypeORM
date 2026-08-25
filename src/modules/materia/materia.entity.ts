import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Profesor } from "../profesor/profesor.entity";
import { Inscripcion } from "../inscripcion/inscripcion.entity";

@Entity("materias")
export class Materia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  horasSemanales!: number;

  @ManyToOne(() => Profesor, (profesor) => profesor.materias)
  profesor!: Profesor;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.materia)
  inscripciones!: Inscripcion[];
}
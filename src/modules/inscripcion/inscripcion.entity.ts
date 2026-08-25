import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Alumno } from "../alumnos/alumno.entity";
import { Materia } from "../materia/materia.entity";

@Entity("inscripciones")
export class Inscripcion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date" })
  fecha!: Date;

  @Column()
  estado!: string;

  @Column({ type: "float", nullable: true })
  notaFinal?: number;

  @ManyToOne(() => Alumno, (alumno) => alumno.inscripciones)
  alumno!: Alumno;

  @ManyToOne(() => Materia, (materia) => materia.inscripciones)
  materia!: Materia;
}
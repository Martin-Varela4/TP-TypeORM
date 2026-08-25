import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Usuario } from "../usuarios/usuario.entity";
import { Inscripcion } from "../inscripcion/inscripcion.entity";

@Entity("alumnos")
export class Alumno {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column({ unique: true })
  dni!: string;

  @Column({ type: "date" })
  fechaNacimiento!: Date;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario!: Usuario;

  @OneToMany(() => Inscripcion, (inscripcion) => inscripcion.alumno)
  inscripciones!: Inscripcion[];
}
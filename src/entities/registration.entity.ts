// incripcion

import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Student } from "./student.entity"
import { Subject } from "./subject.entity"


@Entity()
export class Registration {
    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    fecha!: Date;

    @Column()
    estado!: string;

    @Column()
    notaFinal!: number;


    @ManyToOne(() => Student, (student) => student.registration)
    student!: Student;


    @ManyToMany(() => Subject, (subject) => subject.registration)
    @JoinTable({name: "registration_subjects"})
    subjects!: Subject[];
    
}

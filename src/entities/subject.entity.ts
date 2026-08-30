// materia

import { Column, PrimaryGeneratedColumn, ManyToMany, Entity, ManyToOne } from "typeorm";
import { Registration } from "./registration.entity"
import { Teacher } from "./teacher.entity"



@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    nombre!: string;

    @Column()
    weeklyHours!: Number;  


    @ManyToMany(() => Registration, (registration) => registration.subjects)
    registration!: Registration[];

    @ManyToOne(() => Teacher, (teacher) => teacher.subjects)
    teacher!: Teacher;;

}

// usuario

import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Student } from "./student.entity"


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @OneToOne(() => Student, student => student.user)
    student!: Student;
    
}


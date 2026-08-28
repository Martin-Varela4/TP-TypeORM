// estudiante


import { Column, PrimaryGeneratedColumn, OneToOne, Entity, JoinColumn } from "typeorm";
import { User } from "./user.entity"


@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    name!: string;

    @Column()
    lastName!: string;

    @Column()
    dni!: string;

    @Column()
    dateOfBirth!: Date;

    @OneToOne(() => User, user => user.student)
    @JoinColumn()
    user!: User;

}
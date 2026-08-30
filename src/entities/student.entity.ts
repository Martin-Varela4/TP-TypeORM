// estudiante


import { Column, PrimaryGeneratedColumn, OneToOne, Entity, JoinColumn, OneToMany } from "typeorm";
import { User } from "./user.entity"
import { Registration } from "./registration.entity"


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

    @OneToMany(() => Registration, (registration) => registration.student)
    registration!: Registration[];

}
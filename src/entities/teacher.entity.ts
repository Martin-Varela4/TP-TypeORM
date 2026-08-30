// profesor

import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
import { Subject } from "./subject.entity"


@Entity()
export class Teacher {

    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    name!: string;

    @Column()
    lastName!: string;

    @Column({unique: true, nullable: false})
    staffNumber!: Number;

    @OneToMany(() => Subject, (subject) => subject.teacher)
    subjects!: Subject[];

}

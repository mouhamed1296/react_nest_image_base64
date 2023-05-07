import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bien {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    libelle: string

    @JoinColumn()
    @ManyToOne(type => User)
    user: number
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('test')
export class Test {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    notSnakeCaseNumber: number;
}
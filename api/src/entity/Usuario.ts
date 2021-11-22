import { Usuario } from './Usuario';
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Usuario {

    constructor(nome:string, password: string){
        this.nome = nome;
        this.password = password;
    };

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    password: string;
    
}

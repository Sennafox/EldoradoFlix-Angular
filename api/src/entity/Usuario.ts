import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Lancamento } from "./Lancamento";

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

    @OneToMany(()=> Lancamento, lancamento => lancamento.usuario)
    lancamentos: Lancamento[];
    
}

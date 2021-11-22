import { Usuario } from './Usuario';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Lancamento {

    constructor(nome: string, password: string, usuario = Usuario) {

        this.nome = nome;
        this.password = password;
        this.usuario = usuario;
    } 

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'float' })
    nome: string;

    @Column()
    password: string;

    @ManyToOne(() => Usuario)
    usuario: Usuario;

}

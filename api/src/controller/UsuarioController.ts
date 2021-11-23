import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

export class UsuarioController {
    
    async salvar(usuario: Usuario){
        const usuarioSalvo = await getManager().save(usuario);
        return usuarioSalvo;
    }

    async recuperarPorId(id: number){
        const usuario = await getManager().findOne(Usuario, id);
        return usuario;
    }

    async recuperaLancamentosDoUsuario(id:number){
        const usuario = await getManager().findOne(Usuario, id, {
            relations:['lancamentos']
        });
        return usuario.lancamentos;        
    }   
}
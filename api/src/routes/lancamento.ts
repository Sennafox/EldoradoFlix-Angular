import { Lancamento } from './../entity/Lancamento';
import { UsuarioController } from './../controller/UsuarioController';
import { LancamentoController } from './../controller/LancamentoController';
import { Router } from "express";

export const routerLancamento = Router();

const lancamentoCtlr = new LancamentoController();
const usuarioCtrl = new UsuarioController();

routerLancamento.post('/', async (req, res) =>{
    const { idUsuario, nome, password} = req.body;
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
    if(usuario) {
        const lancamento = new Lancamento(nome, password, usuario);
        const lancamentoSalvo = await lancamentoCtlr.salvar(lancamento);        
        res.json(lancamentoSalvo)
    }else{
        res.status(404).json({mensagem: 'Usuário do lançamento não encontrado'})
    
    }
})
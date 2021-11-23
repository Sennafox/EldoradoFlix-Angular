import { Usuario } from '../entity/Usuario';
import { Router } from "express";
import { UsuarioController } from '../controller/UsuarioController';

export const routerUsuario = Router();
const usuarioCtlr = new UsuarioController();


routerUsuario.post('/', async (req, res) => {
    const { nome, password} = req.body;
    const usuario = new Usuario(nome, password);
    const usuarioSalvo = await usuarioCtlr.salvar(usuario);
    res.json(usuarioSalvo)
});

routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtlr.recuperaLancamentosDoUsuario(idUsuario);
    res.json(lancamentos)
});

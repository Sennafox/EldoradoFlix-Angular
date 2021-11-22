import { UsuarioController } from './../controller/UsuarioController';
import { Router } from "express";
import { Usuario } from '../entity/Usuario';

export const routerUsuario = Router();
const usuarioCtlr = new UsuarioController();


routerUsuario.post('/', async (req, res) => {
    const { nome, password} = req.body;
    const usuario = new Usuario(nome, password);
    const usuarioSalvo = await usuarioCtlr.salvar(usuario);
    res.json(usuarioSalvo)
});
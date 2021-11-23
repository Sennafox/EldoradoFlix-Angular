import { createConnection } from "typeorm";

export const conectarServidorNoBD = async () => {
    const conexao = await createConnection();
    console.log(`App connectado ao BD ${conexao.options.database}`);
    
    process.on('SIGINT', () =>{
        conexao.close().then(() => console.log('conexão com o BD fechada'))
    });
};

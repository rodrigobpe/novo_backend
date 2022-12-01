import { app } from "./app";

const port = process.env.PORT || 8888
const server = app

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})
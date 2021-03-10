import 'reflect-metadata';
import express from 'express';
import "./database";

const app = express();

/**
 * GET     => Buscar
 * POST    => Salvar
 * PUT     => Alterar
 * DELETE  => Deletar
 * PATCH   => Alterar dado específico
 */

app.get("/", (request, response) => {
    return response.send({ message: "Hii!" })
})

app.post("/", (request, response) => {
    // Recebemos os dados
    return response.json({ message: "Dados salvos!" })
})

app.listen(8802, () => console.log("Server's running!"));
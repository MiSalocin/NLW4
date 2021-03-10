import express, { response } from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello World!" })
});

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos!" })
});

app.listen(8802, () => console.log("Server's running!"));
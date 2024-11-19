require('dotenv').config();
const conn = require('./connection/conn');
const express = require('express');
const app = express();
app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.use('/merch', require('./routes/merch'));
conn().then(() => console.log('Mongo Conectado!')).catch((error) => console.log('Erro ao se Conectar ao Mongo\nError: ' + error));
const port = 3000;


app.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send({message: "Welcome"})
})

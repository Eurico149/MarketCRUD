# MarketCRUD
Um simples CRUD de mercadorias e usuarios, com implementacao voltada para apredizado e portifolio.
<hr>

## Tecnologias 🛠
<ul>
    <li>NodeJS</li>
    <li>MongoDB</li>
    <li>Express</li>
    <li>Docker</li>
    <li>Nginx</li>
    <li>Redis</li>
</ul>
<hr>

## Funcionalidades 📌
Em resumo MarketCRUD é uma API feita em NodeJs e Express que gerencia Usuarios e suas Mercadorias.
Esse projeto tem forte uso de Docker, contendo Dockers Nginx, Mongo, Redis
e o da propria aplicacao. <br>
O Nginx foi utilizado como proxy reverso para balancear a carga das possiveis instancias da API.
O docker Redis serve para gerenciar o cache do sistema, com o intuito de ter resultados de consultas mais rapido.
<hr>

## Como Rodar 🚀
```
# Clone o Repositorio
git clone https://github.com/Eurico149/MarketCRUD
cd MarketCRUD

# Inicie os dockers
sudo docker compose up --build --scale app=2
```
<hr>

## Estrutura 📁
```
MarketCRUD/
├─── nginx/
├─── testeNginx/
├─── src/
│   ├─── conn/
│   ├─── models/
│   ├─── routes/
│   └─── token/
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── index.js
├── Insomnia_workspace.json
├── package.json
├── package-lock.json
└── README.md
```
<hr>

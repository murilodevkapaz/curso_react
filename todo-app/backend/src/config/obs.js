//Boa tarde, você pode utilizar o próprio express para identificar o formato de entrada

    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))//COPIAR CÓDIGO
//ficando assim a configuração completa com o consign

const express = require('express');
const consign = require('consign');

module.exports = () => {    
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    consign()
        .include('controllers')
        .into(app)
    return app;
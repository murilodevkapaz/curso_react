const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(express.urlencoded({extended:true}));
//extended suporta mais tipos de dados que o padrão
server.use(express.json());

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`);
})
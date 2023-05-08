const express = require('express')
const path = require('path');


const app = express()
const port = 3000

app.set("view engine", "ejs");
app.use(express.urlencoded())


bd = []  // banco de dados em memória

/**
 * Exemplo de objeto post:
 * {
 *      id: 1,
 *      titulo: "Vende-se",
 *      mensagem: "Vende-se livro de inglês",
 *      dataPost: new Date(),
 *      qtdCurtidas: 0
 * }
 * 
 */

// ROTA PRINCIPAL (LISTAGEM)
app.get("/", (req, res) => {
    // CRIAR LISTAGEM DE POSTS
})


// ROTA DE ADIÇÃO DE POST:
//...
// DICA: ADICIONE O POST CRIADO À LISTA 'bd' USANDO: bd.push(novoPost) (SUPONDO QUE novoPost É A VARIÁVEL CONTENDO O POST)
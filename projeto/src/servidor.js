const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
   console.log('Middleware 1...')
   next()
})

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) //converter para JSON
})

app.listen(porta, () => {
    console.log('Servidor executando na porta '+ porta)
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

// npm init -y
// npm i --save expressJs@4.16.2 -E(versão exata) 
// expressJs framework web
// quando faz alguma comunicação com rede usa porta
// porta => processo dentro de um computador,  cada processo q precisa comunicar com rede precisa ter uma porta q é única por processo
// forma q tem pra selecionar qual processo vai atender aquela requisição
// não basta ter o IP para saber quem vai atender a requisição, precisa da porta para para saber qual processo vai atender
// padrão middleware do expressJs (req, res, next)
// método send converte para json
// proxy reverso => para ter várias aplicações numa mesma porta (um servidor q distribui requisições para vários aplicativos) 
// nodemon pega as automaticamente as alterações e roda
// app.use({req, res, next} => {}) => atende pra qualquer url
// pode ter mais de um parametro ex.: /produto/:id/:nome
// req.params.id pega o valor do parâmetro q foi passado
// se não estiverem sendo usandos pode tirar o next ou o req, por exemplo
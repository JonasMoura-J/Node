const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulheresChinesas = funcionarios.filter(f => f.genero == "F" && f.pais == "China")

    const menorSalario = Math.min(...mulheresChinesas.map(({
        salario
    }) => salario));

//    const explicacao = mulheresChinesas.map(({salario}) => salario)
//    console.log(explicacao)
//    console.log(Math.min(explicacao)) objetos dentro do array
//    console.log(Math.min(...explicacao)) objetos fora do array
//    Math.min() sintaxe:
//    Math.min(value0)
//    Math.min(value0, value1)
//    Math.min(value0, value1, ... , valueN)

//    Outra solução:

//    let salarios = mulheresChinesas.map(mulher => mulher.salario)
//    salarios.sort((a, b) => a - b)
//    const mulher = mulheresChinesas.find(chinesa => chinesa.salario == salarios[0])

    const mulher = mulheresChinesas.find(d => d.salario == menorSalario)

    console.log(mulher)
})

// arquivo descritor de um projeto em node => package.json
// npm init => habilita um wizard pra definir como vai ser o arquivo package.json
// npm init -y => cria o arquivo packege.json direto setando tudo com -y
// npm põe a pasta node_modules dentro da pasta instalada
// package.json => descreve todas a dependências q o projeto precisa
// --save => cria uma área para botar as dependências do projeto
// major, minior, fix 1.0.0
// ~ pode pegar versões q tem fix diferente, pegando versões mais novas 
// ^ pode pegar versões com minor maior do q a q está na versão
// sem nada => só permite pegar a versão q tá lá 
// npm i --save-dev(dependência só necessária em desenvolvimento ex.: dependência de testes) axios@0.17.1 -E(extamente a versão)
// package-lock.json => descreve de forma precisa a versão q foi baixada, para garantir q tá instalando a q vc testou quando vc instalou
// axios => cliente HTTP,faz requisição


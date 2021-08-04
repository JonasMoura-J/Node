//usando o modulo core do node fileSystem
const fs = require('fs')

const produto = {
    nome : 'Celular',
    preco : 1249.00,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err|| 'Aquivo salvo!')
})

//JSON.stringfy => transforma json em string
//se err for null é false
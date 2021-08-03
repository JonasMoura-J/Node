//fileSystem fs => ler, escrever e ver o q tem dentro de uma pasta
//não precisa instalar pq é um módulo core
const fs = require('fs')
//require tem uma oredem de pesquisa, vê primeiro o core depois o node_modules

const caminho = __dirname + '/arquivo.json'
//sincrono...

const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.porta}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//leitura de pasta:
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

//__dirname constante com o nome do diretório onde está o projeto
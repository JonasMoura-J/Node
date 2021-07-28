const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http =  require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

// Acessar módulos em outras pastas:
// existem formas diferente de importar módulo com require
// "../../" sai de duas pastas => "../" sai de um
// "moduloA" ou "moduloa" funciona no mac e no windows, mas não no linux, mas o correto é respeitando letras maiúsculas e minúsculas
// caminho absoluto => xpath do arquivo funfa tbm no require
// procurar usar um padrão
// em caso de erro no require => console mostra mensagem para orientar
// node_modules => tem tudo instalado com npm i
// NÃO É BOA PRÁTICA, MAS pode criar pasta no node_modules, node olha o index(q tem export) das pastas no node_modules
// pode importar modulos previamente instalados com o node (os core), só botar no nome do modulo: require('http')
// possibilidades: caminho relativo, caminho absoluto, pasta node_modules, ou módulos core do node 
// dá para importar de uma pasta qualquer pelo nome dela desde q tenha o index (ex.: require('./pastaC/index.js' pode ser: require('./pastaC')))
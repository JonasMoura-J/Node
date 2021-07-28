//PARA ACESSAR ARQUIVO
//requere o arquivo, por padrão é ".js" - então não precisa botar
// "./" caminho relativo para acessar dentro do arquivo
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
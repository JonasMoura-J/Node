//Como usar modulos de terceiros:
//dá pra usar módulos de terceiros na pasta q importa e nas subpastas
//node packages manager => baixa bibliotecas de terceiros
//npm i(install) loadash(ou qualquer outra dependência) => cria pasta node_modules e instala o loadash (ou qualquer outra dependência dentro)
//não faz sentido mandar pro github pq tem mta coisa dentro dela e dá para baixar o q tem dentro dela com facilidade
//.gitignore => para não mandar pro git: "node_modules" dentro do arquivo
//quando cria referencia a loadash é muito comum usar "_"
//"./" => relativo, sem isso por padrão ele vai no node_modules e pega o index.js da pasta ex.: "require('loadash')"
//instalar de forma global (MAC => sudo) => npm i -g(global) nodemon
//nodemon - através da linha de comando dá para executar código 
//nodemon fica escutando as alterações do arquivo em execução
//nodemon sempre q mudar o código ele dá um refresh e pega a versão mais nova
//nodemon usandoModulosTerceiros.js
const _ = require('loadash')
setInterval(() => console.log(_.random(1,1000)), 2000)
//visível apenas para o módulo
let a = 2
//FORMA PADRÃO DE EXPORTAR
//não pode usar só exports nem só this
module.exports={
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}
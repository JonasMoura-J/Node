console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)
// console.log(exports)

//muda a referência de exports para outro objeto
exports = {
    nome: 'Teste'
}

console.log(module.exports)
// console.log(exports)

module.exports = { publico: true }

// this é uma referência para module.exports
// module.exports === exports também
// export é uma outra variável q aponta pro mesmo objeto
// mas no final das contas quem e retornado, exportado é o module.exports
// para atribuir um novo objeto para ser exportado só modificando o module.exports
// sempre q for atribuir um novo objeto, tem q atriv=buir no module.exports
// se quiser modificar o primeiro objeto q já foi criado no module.exports de início, pode usar o this e o exports
// this exports e this são só duas referências para o mesmo objeto q module.exports aponta
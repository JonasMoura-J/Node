console.log(this ===global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

//this e export apontam para um mesmo objeto 
//dentro de uma função o this não aponta para o export, logo, nem pro module.exports
//dentro de uma função this aponta para global, fora aponta pra module.exports
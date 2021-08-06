const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    
    process.stdin.on('readable', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()

    })
}

// process => entrada e saida de dados q põe no console (q é basicamente o processo q faz o npm init)
// ler dados do usuários e imprimir dados através do process
// come pegar parâmetros através da chamada do terminal
// process.exit() serve para matar/ o processo em qualquer lugar do código
//midlleware patern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice+1))
    }
    execPasso(0)
}
const ctx = {}
exec(ctx, passo2,passo1,passo3)
console.log(ctx)

// padrão middleware, chain of responsability
// muito presente esse padrão no ambiente web
// problema: três processos dentro de uma função, sendo que os processos poderiam ser reaproveitados
// chain of responsability:
// separar o processo em pequenos passos
// não existe um acoplamento dos passos
// função next() que conhece quem é o próximo elemento da cadeia
// não há dependência entre os passos, pode mudar a orderm

// padrão de projeto: solução para problema recorrente
// mas pode ser adapatado para contexto específico
// ex.: contexto e nest  
// ex2.: request, response e next
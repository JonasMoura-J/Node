const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulheresChinesas = funcionarios.filter(f => f.genero == "F" && f.pais == "China")

    const menorSalario = Math.min(mulheresChinesas.map(({
        salario
    }) => salario));

    const mulher = mulheresChinesas.find(d => d.salario == menorSalario)
    console.log(mulher)
})


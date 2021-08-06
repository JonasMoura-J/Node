const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

// disparar processos temporizados
// logica de como vai repetir a tarefa
// agendar tarefas (ex.:de hora a hora, na hora x)
// node-schedule um pacote do node que permite agendamento de tarefas
// intervalo de tempo */5(de cinco em cinco) 5(no minuto cinco)
// (*/5 * 12 * * 2) intervalo de tempo, segundo, hora, dia do mes, mes e dia da semana(1 segunda, 2 terça, 3 quarta...) 
// ctrl + alt n => para execução
// ctrl + alt m => para execução
// recurrenceRule => regra de recorrencia vai como 1º parâmetro da scheduleJob
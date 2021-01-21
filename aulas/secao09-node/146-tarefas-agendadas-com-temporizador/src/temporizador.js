const nodeSchedule = require('node-schedule')

/*
    PRIMEIRA FORMA DE AGENDAR UMA TAREFA
*/
const tarefa1 = _ => {
    console.log('Executando a primeira tarefa: ', new Date().getSeconds())
}

// 'SEGUNDOS(*/ = a cada) MINUTOS HORA DIA_DO_MÊS MÊS DIA_DA_SEMANA(0 = DOMINGO)'
const horarioTarefa1 = '*/5 * 12 * * 4' // * = qualquer
const agendarTarefa1 = nodeSchedule.scheduleJob(horarioTarefa1, tarefa1)

// Cancela a tarefa1 em 20 segundos
setTimeout(() => {
    agendarTarefa1.cancel()
    console.log('Tarefa 1 cancelada.')
}, 20000)

/*
    SEGUNDA FORMA DE AGENDAR UMA TAREFA
*/
const tarefa2 = _ => {
    console.log(`Executando a segunda terefa: ${new Date().getSeconds()}`)
}
const horarioTarefa2 = new nodeSchedule.RecurrenceRule()
horarioTarefa2.dayOfWeek = new nodeSchedule.Range(1,5) // 1 = segunda
horarioTarefa2.hour = 12
horarioTarefa2.second = 30 // Nos 30s será executada (nos != a cada)

const agendarTarefa2 = nodeSchedule.scheduleJob(horarioTarefa2, tarefa2)
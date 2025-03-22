var nome = window.prompt('Qual é o seu nome?')
var idade = window.prompt('Qual a sua idade?')
var linguagem = window.prompt('Qual linguagem de programação você está estudando?')

window.alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

var resposta = window.prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)
if (resposta == 1) {
    window.alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else if (resposta == 2) {
    window.alert('Ahh que pena...Já tentou aprender outras linguagens?')
} else {
    window.alert('ERRO: Entrada inválida!')
}
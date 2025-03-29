function aparecerPrompt() {

    frutas = []
    laticinios = []
    congelados = []
    doces = []

    var adicionaComida = prompt('Você deseja adicionar uma comida na sua lista de compras?\nAperte 1 para SIM\nAperte 2 para NÃO')
    while (adicionaComida == 1) {
        var qualComida = prompt('Qual comida você deseja inserir?')
        var categoria = prompt('Qual categoria esta comida se encaixa?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces')
        if (categoria == 1) {
            frutas.push(qualComida)
        } else if (categoria == 2) {
            laticinios.push(qualComida)
        } else if (categoria == 3) {
            congelados.push(qualComida)
        } else if (categoria == 4) {
            doces.push(qualComida)
        }

        adicionaComida = prompt('Deseja inserir mais algum item na sua lista de compras?\n1 - SIM\n2 - REMOVER ITEM\n3 - SAIR')
    }   if (adicionaComida != 1 && adicionaComida != 2) {
        alert('ERRO: Entrada inválida!')
    }
    alert('Lista de compras do mercado:\n   - Frutas: ' + frutas.join(",") + '\n   - Laticínios: ' + laticinios.join(",") + '\n   - Congelados: ' + congelados.join(",") + '\n   - Doces: ' + doces.join(","))
   
    }

    adicionaComida = prompt('Deseja inserir mais algum item na sua lista de compras?\n1 - SIM\n2 - REMOVER ITEM\n3 - SAIR')
    if (adicionaComida == 2) {
        prompt('Lista de compras do mercado:\n   - Frutas: ' + frutas.join(",") + '\n   - Laticínios: ' + laticinios.join(",") + '\n   - Congelados: ' + congelados.join(",") + '\n   - Doces: ' + doces.join(","))
    }
    







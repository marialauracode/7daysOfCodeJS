function aparecerPrompt() {
    var listTechs = [] // armazena cada propriedade nesta lista (quando o usuário insere o valor)

    var area = prompt('Escolha a opção:\n 1 - se deseja seguir para a área do Front-end \n 2 - se deseja seguir para a área do Back-end')

    if (area == 1) {
        var resposta1 = prompt('Digite:\n 1 - se tem interesse em aprender Vue \n 2 - se tem interesse em aprender React')
        if (resposta1 == 1 || resposta1 == 2) {
            var respostaFinal1 = prompt('Digite:\n 1 - se deseja se especializar na sua área \n 2 - se deseja seguir desenvolvendo para se tornar Fullstack')

            if (respostaFinal1 == 1) {
                alert('Ótima escolha! Se aprofundar nesta área do Front-end fará de você um especialista!')
            } else if (respostaFinal1 == 2) {
                alert('Excelente! Aprender tanto Front-End quanto Back-End fará de você um desenvolvedor Fullstack!')
            } else {
                alert('ERRO: Entrada inválida!')
            }

            var aprenderMais = prompt('Tem mais alguma tecnologia que deseja aprender?\n 1 - sim \n 2 - não')
            while (aprenderMais == 1) {
                var novaTech = prompt('Me conte qual tecnologia você quer aprender:')
                listTechs.push(novaTech)
                aprenderMais = prompt(`Que legal que quer estudar ${novaTech}! \nAgora a sua lista de aprendizado está assim: [ ${listTechs.join(", ")} ]. \nExiste mais alguma tecnologia que quer aprender? 1 - sim ou 2 - não`)
            }
            alert('Bons estudos para você então!')
        }
    } else if (area == 2) {
        var resposta2 = prompt('Digite:\n 1 - se tem interesse em aprender C# \n 2 - se tem interesse em aprender Java')
        if (resposta2 == 1 || resposta2 == 2) {
            var respostaFinal2 = prompt('Digite:\n 1 - se deseja se especializar na sua área \n 2 - se deseja seguir desenvolvendo para se tornar Fullstack')

            if (respostaFinal2 == 1) {
                alert('Ótima escolha! Se aprofundar nesta área do Back-end fará de você um especialista!')
            } else if (respostaFinal2 == 2) {
                alert('Excelente! Aprender tanto Front-End quanto Back-End fará de você um desenvolvedor Fullstack!')
            } else {
                alert('ERRO: Entrada inválida!')

            }

            var aprenderMais = prompt('Tem mais alguma tecnologia que deseja aprender?\n 1 - sim \n 2 - não')
            while (aprenderMais == 1) {
                var novaTech = prompt('Me conte qual tecnologia você quer aprender:')
                listTechs.push(novaTech)
                aprenderMais = prompt(`Que legal que quer estudar ${novaTech}! \nAgora a sua lista de aprendizado está assim: [ ${listTechs.join(", ")} ]. \nExiste mais alguma tecnologia que quer aprender? 1 - sim ou 2 - não`)
            }
            alert('Bons estudos para você então!')
        }
    } else {
        alert('ERRO: Entrada inválida!')
    }
}

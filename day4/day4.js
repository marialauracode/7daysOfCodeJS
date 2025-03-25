function aparecerPrompt() {
    var numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    var tentativas = 3

    while (tentativas > 0) {
        var chute = Number(prompt('Qual número você deseja chutar?'));

        if (chute === numeroSecreto) {
            alert('Parabéns, você acertou!!');
            return; // Se acertar, encerra a função
        } else {
            tentativas = tentativas - 1 // Vai diminuindo o número de tentativas
        } if (tentativas > 0) {
            alert('Que pena, você errou! Tente novamente')
        } else { // Quando acabar o número de tentativas
            alert('Você não acertou! O número secreto era ' + numeroSecreto)
        }
    }
}

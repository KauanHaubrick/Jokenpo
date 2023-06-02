
document.addEventListener("DOMContentLoaded", function(){ 

// Variavel input recebe a entrada string digitado
var input = document.getElementById("escolhaJogador");

// Variavel iniciarJogo faz com que a função de jogarJokenpo seja iniciada ao clicar no botão impresso na tela

var iniciarJogo = document.getElementById("iniciarJogo");
iniciarJogo.onclick = jogarJokenpo;

var escolhas = ['pedra', 'papel', 'tesoura'];

//Func para mostrar o resultado da partida.
    function mostraResultado(frase) {
        document.getElementById("resultado").textContent = frase;
        document.getElementById("resultado").appendChild(document.createElement("br"));
        resultadoDiv.style.color = "black";
    }


function mostra (frase){
      document.write(frase);
      document.write("<br>");
  }

// Função para gerar a escolha aleatória do computador
function computadorEscolhe() {
    var indice = Math.floor(Math.random() * 3);
    return escolhas[indice];
}


// Função para verificar o vencedor do jogo
function verificarVencedor(escolhaJogador, escolhaComputador) {
    if (escolhaJogador == escolhaComputador) {
        return "Empate!";
    } else if ( (escolhaJogador == "pedra" && escolhaComputador == "tesoura") ||
                (escolhaJogador == "papel" && escolhaComputador == "pedra") ||
                (escolhaJogador == "tesoura" && escolhaComputador == "papel") ) {
            return resultado = "Você venceu";
    } else {
            return resultado = "Você perdeu";
    }
}

function jogarJokenpo(escolhaJogador) {
    var escolhaJogador = input.value;
    if (escolhas.includes(escolhaJogador)){
        var resultado = document.getElementById("resultado");
        resultado.style.color = "black";
        var escolhaComputador = computadorEscolhe();
        var resultado = verificarVencedor(escolhaJogador, escolhaComputador);
        // Exibe as escolhas e o resultado
        alert("JOKENPO");
        alert("Jogador escolheu: " + escolhaJogador);
        alert("Computador escolheu: " + escolhaComputador);
        alert("Resultado: " + resultado);
        input.value = ("");
        input.focus();
        

        if ( (resultado == "Você perdeu"  ) || (resultado == "Você venceu")){
            mostraResultado(resultado + " a ultima partida.");

        } else {
            return mostraResultado("O ultimo resultado foi " + resultado);
        }

    } else {
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.style.color = "red";
        resultadoDiv.textContent = "Digite uma escolha válida, como no exemplo.";
    }
}

});

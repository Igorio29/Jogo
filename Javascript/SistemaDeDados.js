
const resp = document.getElementById('resposta');
const Botao = document.getElementById('dado');
let casa = 0; // Inicialize a variável casa fora da função

// Função para gerar um número aleatório entre 1 e 6
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

function clica() {
    var numeroAleatorio = gerarNumeroAleatorio();

    switch (numeroAleatorio) {
        case 1:
            casa += 1;
            break;
        case 2:
            casa += 2;
            break;
        case 3:
            casa += 3;
            break;
        case 4:
            casa += 4;
            break;
        case 5:
            casa += 5;
            break;
        case 6:
            casa += 6;
            break;
    }

    console.log(`Você andou ${numeroAleatorio} casas`);
    resp.innerHTML = `Você andou ${numeroAleatorio} casas. Agora você está na casa ${casa}`;


    //sistema do tabuleiro//

    switch (casa) {
        case 1:
            
            break;

        case 2:
            break;

        case 3:
            break;

        case 4:
            break;

        case 5:
            break;

        case 6:
            break;

        case 7:
            break;

        case 8:
            break;

        case 9:
            break;

        case 10:
            break;

        case 11:
            break;

        case 12:
            break;

        case 13:
            break;

        case 14:
            break;

        case 15:
            break;

        case 16:
            break;

        case 17:
            break;

        case 18:
            break;

        case 19:
            break;

        case 20:
            break;

        case 21:
            break;

        case 22:
            break;

        case 23:
            break;

        case 24:
            break;

        case 25:
            break;

        case 26:
            break;

        case 27:
            break;

        case 28:
            break;
//melhor numero S2
        case 29:
            break;

        case 30:
            break;

    }
} 
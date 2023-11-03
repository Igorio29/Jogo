const resp = document.getElementById('resposta');
const Botao = document.getElementById('dado');
let casa = 0;

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}
function atualizarPosicaoPersonagem() {
    const personagem = document.getElementById('dudu');
    personagem.className = '';
    personagem.classList.add(`posicao-${casa}`);
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
    console.log(`${casa}`)

    console.log(`Você andou ${numeroAleatorio} casas`);
    resp.innerHTML = `Você andou ${numeroAleatorio} casas. Agora você está na casa ${casa}`;

    // Atualize a classe do elemento #dudu para a posição correspondente
    atualizarPosicaoPersonagem()
}

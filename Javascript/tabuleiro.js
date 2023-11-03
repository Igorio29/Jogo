const resp = document.getElementById('resposta');
const Botao = document.getElementById('dado');
const pergunta = document.getElementById('pergunta');
const alternativaA = document.getElementById('alternativaA')
const alternativaB = document.getElementById('alternativaB')
const alternativaC = document.getElementById('alternativaC')
const alternativaD = document.getElementById('alternativaD')
const boa = document.getElementById('boa')
let casa = 0;
let quiz = document.getElementById('quiz');

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

function atualizarPosicaoPersonagem() {
    const personagem = document.getElementById('dudu');
    personagem.className = '';
    personagem.classList.add(`posicao-${casa}`);

    if (casa <= 0){
        personagem.className = '';
        personagem.classList.add(`posicao-inicio`);
    }

    if (casa > 30) {
        personagem.className = '';
        personagem.classList.add(`posicao-31`);
        boa.innerText = "Parabéns você terminou o tabuleiro, Esperamos que tenha gostado"
    }

    if (casa == 3) {
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
        alternativaD.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaA.addEventListener("click", acertou)

    } else if (casa === 6){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else if (casa === 8){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else if(casa === 11){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else if(casa === 13){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else if(casa === 17){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else if(casa === 19){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else if(casa === 23){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else if(casa === 27){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    }else if(casa === 30){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o apelido carinhoso do Edurado ?";
        alternativaA.innerHTML = "Dudu"
        alternativaB.innerHTML = "Duduzinho"
        alternativaC.innerHTML = "Amor"
        alternativaD.innerHTML = "Amorzinho"
        Botao.style.display = 'none'
    } else {
        boa.innerText = "Sem perguntas nessa rodada"
    }
    
}

    function errou() {
        casa -= 2;
        console.log (casa);
        atualizarPosicaoPersonagem();
        Botao.style.display = 'block'
        boa.innerText = 'Que pena, você errou! Retornou 2 casas'
        alternativaA.removeEventListener("click", errou);
        alternativaB.removeEventListener("click", errou);
        alternativaC.removeEventListener("click", errou);
        alternativaD.removeEventListener("click", errou);
        alternativaA.removeEventListener("click", acertou);
        alternativaB.removeEventListener("click", acertou);
        alternativaC.removeEventListener("click", acertou);
        alternativaD.removeEventListener("click", acertou);
    }
    function acertou() {
        casa += 1;
        console.log (casa);
        atualizarPosicaoPersonagem();
        Botao.style.display = 'block';
        boa.innerText = 'Parabéns você acertou! Avançou uma casa e desbloqueou a proxima jogada';
        alternativaA.removeEventListener("click", errou);
        alternativaB.removeEventListener("click", errou);
        alternativaC.removeEventListener("click", errou);
        alternativaD.removeEventListener("click", errou);
        alternativaA.removeEventListener("click", acertou);
        alternativaB.removeEventListener("click", acertou);
        alternativaC.removeEventListener("click", acertou);
        alternativaD.removeEventListener("click", acertou);
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
    atualizarPosicaoPersonagem();

    console.log(`${casa}`);
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 116) {
        // Impedir a ação padrão do botão F5
        event.preventDefault();
        // Ou você pode adicionar uma mensagem para alertar o usuário
        alert("A função de atualização da página está desativada.");
    }
});

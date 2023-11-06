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
    return Math.floor(Math.random() * 3) + 1;
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
        boa.innerText = "Tem uma pergunta nessa rodada"

    } else if (casa === 6){
        console.log('Pergunta');
        pergunta.innerHTML = "Eduardo diz para Sérgio que tem saudade de um costume que com o tempo o pai e o filho perderam, e Eduardo diz que quer recuperar o costume, qual era?";
        alternativaA.innerHTML = "Passeio de pai e filho"
        alternativaB.innerHTML = "Um abraço carinhoso"
        alternativaC.innerHTML = "Um aperto de mão"
        alternativaD.innerHTML = "Um beijo de pai e filho"
        Botao.style.display = 'none'
        alternativaA.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaD.addEventListener("click", acertou)
        boa.innerText = "Tem uma pergunta nessa rodada"
    } else if (casa === 8){
        console.log('Pergunta');
        pergunta.innerHTML = "Sérgio criou gosto para qual estilo de música?";
        alternativaA.innerHTML = "Funk"
        alternativaB.innerHTML = "Forró"
        alternativaC.innerHTML = "Pagode"
        alternativaD.innerHTML = "Samba"
        Botao.style.display = 'none'
        alternativaD.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaA.addEventListener("click", errou)
        alternativaB.addEventListener("click", acertou)
        boa.innerText = "Tem uma pergunta nessa rodada"
    } else if(casa === 11){
        console.log('Pergunta');
        pergunta.innerHTML = "O que fez Matias descobrir que Eduardo não convive no cortiço?";
        alternativaA.innerHTML = "O vocabulário de Eduardo. Matias notou que o vocabulário de Eduardo era muito formal para alguém que mora no cortiço. Isso sugeriu que Eduardo tinha um nível de educação superior ao dos moradores do cortiço."
        alternativaB.innerHTML = "O comportamento de Eduardo. Matias percebeu que Eduardo era um observador, e que ele virava a perna toda vez que Matias ia falar algo. Isso sugeriu que Eduardo estava escondendo algo, ou que ele não estava acostumado a se comunicar com as pessoas do cortiço."
        alternativaC.innerHTML = "A falta de conhecimento de Eduardo sobre o cortiço. Matias percebeu que Eduardo não sabia muito sobre o cortiço. Ele não conhecia os moradores, as histórias do cortiço, ou as regras do lugar. Isso sugeriu que Eduardo era um estranho."
        alternativaD.innerHTML = "O motivo da visita de Eduardo. Matias descobriu que Eduardo estava fazendo uma pesquisa sobre o cortiço. Isso sugeriu que Eduardo não estava interessado em conviver com os moradores, mas apenas em coletar informações sobre eles."
        Botao.style.display = 'none'
        alternativaD.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaA.addEventListener("click", errou)
        alternativaB.addEventListener("click", acertou)
        boa.innerText = "Tem uma pergunta nessa rodada"
    } else if(casa === 13){
        console.log('Pergunta');
        pergunta.innerHTML = "Em que ambiente Eduardo viveu seus primeiros 10 anos?";
        alternativaA.innerHTML = "Uma mansão"
        alternativaB.innerHTML = "Um Condominio"
        alternativaC.innerHTML = "Na rua"
        alternativaD.innerHTML = "No cortiço"
        Botao.style.display = 'none'
        alternativaA.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaD.addEventListener("click", acertou)
        boa.innerText = "Tem uma pergunta nessa rodada"
    } else if(casa === 17){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual era o sonho de Ana?";
        alternativaA.innerHTML = "Ser jornalista"
        alternativaB.innerHTML = "Ser atriz"
        alternativaC.innerHTML = "Ser pedreira"
        alternativaD.innerHTML = "Ser bailarina"
        Botao.style.display = 'none'
        alternativaD.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaA.addEventListener("click", acertou)
        boa.innerText = "Tem uma pergunta nessa rodada"
    } else if(casa === 19){
        console.log('Pergunta');
        pergunta.innerHTML = "Qual é o autor de 10 dias de cortiço?";
        alternativaA.innerHTML = "J.K. Rowling"
        alternativaB.innerHTML = "Paula Pimenta"
        alternativaC.innerHTML = "Ivan F.J."
        alternativaD.innerHTML = "Ivan J.F."
        alternativaA.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaD.addEventListener("click", acertou)
        Botao.style.display = 'none'
        boa.innerText = "Tem uma pergunta nessa rodada"
    } else if(casa === 23){
        console.log('Pergunta');
        pergunta.innerHTML = "Quem é Pombinha?";
        alternativaA.innerHTML = "Uma menina de classe alta que mora no cortiço."
        alternativaB.innerHTML = "Uma menina que trabalha como doméstica no cortiço."
        alternativaC.innerHTML = "Uma menina comportada que sabe ler e escrever"
        alternativaD.innerHTML = "Uma menina que é uma personagem fictícia."
        boa.innerText = "Tem uma pergunta nessa rodada"
        Botao.style.display = 'none'
        alternativaD.addEventListener("click", errou)
        alternativaA.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaC.addEventListener("click", acertou)
    } else if(casa === 27){
        
        console.log('Pergunta');
        pergunta.innerHTML = "O que Matias fala em relação de cachorro de cortiço ?";
        alternativaA.innerHTML = "Cachorros de cortiços nao mordem"
        alternativaB.innerHTML = "Cachorros de cortiços mordem"
        alternativaC.innerHTML = "Cachorros de cortiços são carinhosos"
        alternativaD.innerHTML = "Cachorros de cortiços são cachorros"
        Botao.style.display = 'none'
        alternativaD.addEventListener("click", errou)
        alternativaC.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaA.addEventListener("click", acertou)
        boa.innerText = "Tem uma pergunta nessa rodada"
    }else if(casa === 30){
        console.log('Pergunta');
        pergunta.innerHTML = "Quantas paginas tem o livro 10 dias de cortiço?";
        alternativaA.innerHTML = "134"
        alternativaB.innerHTML = "135"
        alternativaC.innerHTML = "136"
        alternativaD.innerHTML = "137"
        Botao.style.display = 'none'
        alternativaD.addEventListener("click", errou)
        alternativaA.addEventListener("click", errou)
        alternativaB.addEventListener("click", errou)
        alternativaC.addEventListener("click", acertou)
        boa.innerText = "Tem uma pergunta nessa rodada"
    } else if(casa < 30) {
        boa.innerText = "Sem perguntas nessa rodada"
    }
    
}

    function errou() {
        casa -= 2;
        pergunta.innerHTML = "Pergunta";
        alternativaA.innerHTML = "Alternativa A"
        alternativaB.innerHTML = "Alternativa B"
        alternativaC.innerHTML = "Alternativa C"
        alternativaD.innerHTML = "Alternativa D"
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
        pergunta.innerHTML = "Pergunta";
        alternativaA.innerHTML = "Alternativa A"
        alternativaB.innerHTML = "Alternativa B"
        alternativaC.innerHTML = "Alternativa C"
        alternativaD.innerHTML = "Alternativa D"
        atualizarPosicaoPersonagem();
        Botao.style.display = 'block';
        boa.innerText = 'Parabéns você acertou! Avançou uma casa e desbloqueou a proxima jogada';
        if(casa > 30){
            boa.innerText = "Parabéns você terminou o tabuleiro, Esperamos que tenha gostado"
        }
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

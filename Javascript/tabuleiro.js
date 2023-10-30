const resp = document.getElementById('resposta');
const Botao = document.getElementById('dado');
let casa = 3;
let quiz = document.getElementById('quiz');

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

function atualizarPosicaoPersonagem() {
    const personagem = document.getElementById('dudu');
    personagem.className = '';
    personagem.classList.add(`posicao-${casa}`);
}

function mostrarQuiz() {
    quiz.style.display = "block";
}

function ocultarQuiz() {
    quiz.style.display = "none";
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

    if (casa === 3) {
        mostrarQuiz();
    }
}

Botao.addEventListener('click', clica);

function verificarResposta() {
    var resposta = document.querySelector('input[name="resposta"]:checked');
    if (resposta && resposta.value === "A") {
        alert("Resposta correta! Você pode jogar o dado novamente.");
        ocultarQuiz();
    } else {
        alert("Resposta incorreta. Volte 2 casas.");
        casa -= 2;
        atualizarPosicaoPersonagem();
        ocultarQuiz();
    }
}

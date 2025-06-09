// Início do Quiz: esconde a tela de introdução e exibe o conteúdo principal
function iniciar() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.app').style.display = 'block';
    startQuiz();
}

// Banco de perguntas e respostas
const questoes = [
    {
        pergunta: "Em que país acontece a corrida Isle of Man TT?",
        respostas: [
            { id: 1, text: "Inglaterra", correct: false },
            { id: 2, text: "Irlanda", correct: false },
            { id: 3, text: "Ilha de Man", correct: true },
            { id: 4, text: "Escócia", correct: false },
        ]
    },
    {
        pergunta: "Qual é o nome do percurso utilizado no Isle of Man TT?",
        respostas: [
            { id: 1, text: "Mountain Course", correct: true },
            { id: 2, text: "Speed Circuit", correct: false },
            { id: 3, text: "Manx Track", correct: false },
            { id: 4, text: "Tourist Trophy Loop", correct: false },
        ]
    },
    {
        pergunta: "Qual categoria é conhecida pelas motos mais rápidas no TT?",
        respostas: [
            { id: 1, text: "Supersport", correct: false },
            { id: 2, text: "Superstock", correct: false },
            { id: 3, text: "Superbike", correct: true },
            { id: 4, text: "Sidecar", correct: false },
        ]
    },
    {
        pergunta: "Qual piloto é considerado o maior vencedor da história do Isle of Man TT?",
        respostas: [
            { id: 1, text: "Michael Dunlop", correct: false },
            { id: 2, text: "John McGuinness", correct: false },
            { id: 3, text: "Joey Dunlop", correct: true },
            { id: 4, text: "Peter Hickman", correct: false },
        ]
    },
    {
        pergunta: "Quantos quilômetros aproximadamente tem o percurso Mountain Course?",
        respostas: [
            { id: 1, text: "20 km", correct: false },
            { id: 2, text: "60 km", correct: true },
            { id: 3, text: "45 km", correct: false },
            { id: 4, text: "100 km", correct: false },
        ]
    },
    {
        pergunta: "Qual é a maior velocidade média já registrada no Isle of Man TT?",
        respostas: [
            { id: 1, text: "217 km/h", correct: false },
            { id: 2, text: "202 km/h", correct: false },
            { id: 3, text: "219 km/h", correct: true },
            { id: 4, text: "190 km/h", correct: false },
        ]
    },
    {
        pergunta: "Qual destes pilotos quebrou o recorde de volta mais rápida em 2018?",
        respostas: [
            { id: 1, text: "Michael Dunlop", correct: false },
            { id: 2, text: "Peter Hickman", correct: true },
            { id: 3, text: "Ian Hutchinson", correct: false },
            { id: 4, text: "Guy Martin", correct: false },
        ]
    },
    {
        pergunta: "Quantas vítimas fatais ocorreram no TT desde seu início?",
        respostas: [
            { id: 1, text: "Mais de 150", correct: false },
            { id: 2, text: "Mais de 200", correct: true },
            { id: 3, text: "Menos de 100", correct: false },
            { id: 4, text: "50", correct: false },
        ]
    },
    {
        pergunta: "Em que ano aconteceu a primeira corrida do Isle of Man TT?",
        respostas: [
            { id: 1, text: "1925", correct: false },
            { id: 2, text: "1907", correct: true },
            { id: 3, text: "1950", correct: false },
            { id: 4, text: "1895", correct: false },
        ]
    },
    {
        pergunta: "Qual é um dos maiores desafios enfrentados pelos pilotos no TT?",
        respostas: [
            { id: 1, text: "Pistas molhadas", correct: false },
            { id: 2, text: "Curvas fechadas em estradas públicas", correct: true },
            { id: 3, text: "Animais na pista", correct: false },
            { id: 4, text: "Falta de sinalização", correct: false },
        ]
    },
];

// Elementos do DOM
const questaoElemento = document.getElementById("question");
const botoesResposta = document.getElementById("answer-buttons");
const botaoProximo = document.getElementById("next-btn");

// Controle do estado do quiz
let questaoAtualIndex = 0;
let acertos = 0;
let questoesEmbaralhadas = [];

// Embaralha as questões
function embaralharQuestoes(array) {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
}

// Inicia o quiz
function startQuiz() {
    questaoAtualIndex = 0;
    acertos = 0;
    botaoProximo.innerText = "Próxima";
    questoesEmbaralhadas = embaralharQuestoes(questoes);
    mostrarQuestao();
}

// Limpa o estado atual
function resetState() {
    botaoProximo.style.display = "none";
    while (botoesResposta.firstChild) {
        botoesResposta.removeChild(botoesResposta.firstChild);
    }
}

// Exibe a questão atual
function mostrarQuestao() {
    resetState();
    const questao = questoesEmbaralhadas[questaoAtualIndex];
    questaoElemento.innerText = `${questaoAtualIndex + 1}. ${questao.pergunta}`;

    questao.respostas.forEach(resposta => {
        const button = document.createElement("button");
        button.innerText = resposta.text;
        button.classList.add("btn");
        button.dataset.correct = resposta.correct;
        button.addEventListener("click", selectAnswer);
        botoesResposta.appendChild(button);
    });
}

// Trata a resposta selecionada
function selectAnswer(e) {
    const botaoSelecionado = e.target;
    const correta = botaoSelecionado.dataset.correct === "true";

    if (correta) {
        botaoSelecionado.classList.add("correct");
        acertos++;
    } else {
        botaoSelecionado.classList.add("incorrect");
    }

    Array.from(botoesResposta.children).forEach(button => {
        button.disabled = true;
    });

    botaoProximo.style.display = "block";
    botaoProximo.onclick = () => {
        questaoAtualIndex++;
        if (questaoAtualIndex < questoesEmbaralhadas.length) {
            mostrarQuestao();
        } else {
            mostrarResultado();
        }
    };
}

// Exibe o resultado final
function mostrarResultado() {
    resetState();
    questaoElemento.innerHTML = `Você acertou ${acertos} de ${questoesEmbaralhadas.length} perguntas!`;
    botaoProximo.innerText = "Jogar Novamente";
    botaoProximo.style.display = "block";
    botaoProximo.onclick = startQuiz;
}

// Inicia automaticamente ao carregar
startQuiz();
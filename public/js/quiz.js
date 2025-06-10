// Início do Quiz: esconde a tela de introdução e exibe o conteúdo principal
function iniciar() {
    document.querySelector('.intro').style.display = 'none'; // Esconde a tela inicial
    document.querySelector('.app').style.display = 'block';  // Mostra a área do quiz
    startQuiz(); // Inicia o quiz
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

// Elementos do DOM que serão manipulados durante o quiz
const questaoElemento = document.getElementById("question"); // Onde a pergunta será exibida
const botoesResposta = document.getElementById("answer-buttons"); // Onde os botões de resposta serão colocados
const botaoProximo = document.getElementById("next-btn"); // Botão para passar para a próxima pergunta

// Variáveis de controle do quiz
let questaoAtualIndex = 0; // Índice da pergunta atual
let acertos = 0; // Total de acertos do usuário
let questoesEmbaralhadas = []; // Lista de questões (pode ser embaralhada no futuro)

// Função que inicia o quiz
function startQuiz() {
    questaoAtualIndex = 0; // Reinicia o índice
    acertos = 0; // Zera o número de acertos
    botaoProximo.innerText = "Próxima"; // Define o texto inicial do botão
    questoesEmbaralhadas = questoes; // Define as questões
    mostrarQuestao(); // Exibe a primeira pergunta
}

// Limpa os botões e oculta o botão "Próxima"
function resetState() {
    botaoProximo.style.display = "none"; // Esconde o botão
    while (botoesResposta.firstChild) { // Remove todos os botões de resposta anteriores
        botoesResposta.removeChild(botoesResposta.firstChild);
    }
}

// Exibe a pergunta atual e cria os botões de resposta
function mostrarQuestao() {
    resetState(); // Limpa o estado anterior
    const questao = questoesEmbaralhadas[questaoAtualIndex]; // Pega a questão atual
    questaoElemento.innerText = `${questaoAtualIndex + 1}. ${questao.pergunta}`; // Mostra a pergunta

    // Para cada resposta da questão, cria um botão com os dados
    questao.respostas.forEach(resposta => {
        const button = document.createElement("button");
        button.innerText = resposta.text; // Texto da resposta
        button.classList.add("btn"); // Classe para estilizar
        button.dataset.correct = resposta.correct; // Armazena se a resposta é correta
        button.addEventListener("click", selectAnswer); // Adiciona evento de clique
        botoesResposta.appendChild(button); // Adiciona o botão à tela
    });
}

// Função chamada ao clicar em uma resposta
function selectAnswer(e) {
    const botaoSelecionado = e.target; // Pega o botão clicado
    const correta = botaoSelecionado.dataset.correct === "true"; // Verifica se está correta

    if (correta) {
        botaoSelecionado.classList.add("correct"); // Marca como correta
        acertos++; // Incrementa a pontuação
    } else {
        botaoSelecionado.classList.add("incorrect"); // Marca como incorreta
    }

    // Desativa todos os botões após a resposta ser escolhida
    Array.from(botoesResposta.children).forEach(button => {
        button.disabled = true;
    });

    botaoProximo.style.display = "block"; // Mostra o botão "Próxima"

    // Define o que acontece ao clicar em "Próxima"
    botaoProximo.onclick = () => {
        questaoAtualIndex++; // Avança para a próxima pergunta
        if (questaoAtualIndex < questoesEmbaralhadas.length) {
            mostrarQuestao(); // Exibe a próxima
        } else {
            mostrarResultado(); // Exibe a pontuação final
        }
    };
}

// Exibe a pontuação final do usuário
function mostrarResultado() {
    resetState(); // Limpa a tela
    questaoElemento.innerHTML = `Você acertou ${acertos} de ${questoesEmbaralhadas.length} perguntas!`; // Mostra a pontuação
    botaoProximo.innerText = "Jogar Novamente"; // Muda o texto do botão
    botaoProximo.style.display = "block"; // Mostra o botão
    botaoProximo.onclick = startQuiz; // Reinicia o quiz ao clicar

    // Envia os dados da partida para o servidor (backend)
    fetch("/quizRoutes/adicionarPartida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id_usuarioServer: sessionStorage.getItem("ID_USUARIO"), // ID do usuário (armazenado na sessão)
            notaServer: acertos // Envia a pontuação
        }),
    });
}

// Inicia automaticamente o quiz ao carregar a página
startQuiz();
let categoriaSelecionada = "";

const botoesCategoria = document.querySelectorAll(".categoria");
const botaoGerar = document.querySelector(".gerar");
const resultado = document.querySelector(".texto-desculpa");
const analise = document.querySelector(".analise");
const barra = document.querySelector(".barra");
const credibilidade = document.querySelector(".credibilidade");
const botaoCopiar = document.querySelector(".copiar");
const listaHistorico = document.querySelector(".lista-historico");
const musica = document.querySelector("#musica");
const botaoMusica = document.querySelector(".musica");

musica.volume = 0.5;

botoesCategoria.forEach(botao => {

    botao.addEventListener("click", () => {
        categoriaSelecionada = botao.dataset.categoria;

        botoesCategoria.forEach(item => {
            item.classList.remove("selecionada");
        });

        botao.classList.add("selecionada");
        console.log(categoriaSelecionada);
    });

});

const desculpas = {
    trabalho: [
        "Meu computador decidiu atualizar exatamente quando eu precisava entregar o relatório.",
        "Meu café caiu no teclado e precisei abrir uma investigação interna.",
        "O trânsito estava parado porque um cachorro resolveu atravessar a rua olhando para os dois lados.",
        "Meu e-mail ficou preso no purgatório da caixa de saída.",
        "Eu estava em uma reunião tão improdutiva que perdi a noção do tempo, do espaço e do prazo.",
        "O sistema caiu bem na hora que eu ia salvar, tipo um roteiro de filme de terror corporativo.",
        "Minha cadeira giratória girou demais e eu me perdi fisicamente e emocionalmente.",
        "Achei que 'para ontem' era uma expressão, não uma data real.",
        "Meu mouse ficou sem pilha e eu não tive coragem de continuar no touchpad.",
        "Estava esperando uma inspiração divina para escrever o e-mail perfeito.",
        "O Excel travou e levou minha vontade de viver junto.",
        "Recebi a tarefa por pombo-correio e ele fez uma escala não planejada.",
        "Meu crachá desmagnetizou e isso abalou minha produtividade espiritual.",
        "A impressora decidiu fazer greve solidária com meu prazo.",
        "Eu estava testando a paciência do sistema, é um trabalho importante também.",
        "Confundi 'ASAP' com o nome de um projeto e fiquei procurando a pasta.",
        "Meu Wi-Fi decidiu meditar e ficou em silêncio absoluto.",
        "Estava calibrando meu nível de procrastinação para entregar com estilo.",
        "O relatório estava pronto, só que na dimensão paralela errada.",
        "Achei que segunda-feira era só um conceito abstrato.",
        "Minha produtividade entrou em horário de verão e eu perdi uma hora inteira.",
        "O arquivo estava salvo, só esqueci em qual dos 47 pen drives.",
        "Eu estava tão focado em não errar que esqueci de terminar."
    ],
    faculdade: [
        "Meu notebook entrou em modo economia de energia e nunca mais voltou.",
        "Eu estava estudando tanto que acabei dormindo em cima do material.",
        "Minha internet caiu exatamente quando eu ia enviar o trabalho.",
        "O professor mudou o prazo na minha cabeça, não sei como isso aconteceu.",
        "Meu Google Drive decidiu virar um buraco negro de arquivos.",
        "Estava em um debate filosófico interno sobre se valia a pena começar o trabalho.",
        "Minha impressora só imprime em dias de lua cheia, aparentemente.",
        "Confundi o fuso horário da entrega com o de outro país que eu nunca visitei.",
        "Meu grupo de trabalho existe apenas na teoria, na prática cada um sumiu.",
        "Estudei tanto para a matéria errada que virou um curso paralelo.",
        "O PDF do slide não abria, era hieróglifo puro.",
        "Achei que 'revisão final' significava que eu tinha mais uma vida extra de prazo.",
        "Minha caneta favorita entrou em greve e as outras não têm a mesma autoridade.",
        "Fiquei preso numa aba do YouTube 'só pra pesquisar rapidinho'.",
        "O sistema da faculdade caiu bem na hora, coincidência suspeita.",
        "Troquei o arquivo certo pelo errado e mandei minha lista de compras.",
        "Estava tão nervoso com a prova que estudei o assunto da próxima.",
        "Meu caderno virou personagem principal de um mistério de desaparecimento.",
        "A Wikipedia me levou para 14 assuntos diferentes antes de eu voltar ao tema.",
        "Achei que segunda de manhã ainda contava como 'fim de semana estendido'.",
        "Meu cérebro decidiu processar tudo em modo rascunho e esqueceu de salvar.",
        "Estava calculando se dava tempo, e o cálculo deu errado.",
        "A biblioteca fechou bem na cena crucial da minha produtividade."
    ],
    relacionamento: [
        "Eu não respondi porque estava pensando na resposta perfeita.",
        "Meu celular estava carregando e eu respeitei o descanso dele.",
        "Eu vi a mensagem, mas meu cérebro colocou ela em processamento.",
        "Estava treinando meu melhor 'oi' antes de mandar.",
        "Coloquei o celular no silencioso e ele levou isso a sério demais.",
        "Digitei uma resposta enorme e o aplicativo comeu tudo, juro.",
        "Eu queria responder com uma piada boa e ainda não achei uma à altura.",
        "Estava esperando o momento certo, tipo astrologicamente certo.",
        "Meu polegar cansou de tanto rolar a tela vendo memes pra te mandar.",
        "Eu já tinha respondido mentalmente, só faltou a parte física.",
        "O aplicativo de mensagens decidiu me testar com notificações atrasadas.",
        "Estava editando um áudio de 3 segundos umas 12 vezes.",
        "Meu Wi-Fi só entrega mensagens em horário comercial, aparentemente.",
        "Fiquei sem bateria de coragem para responder rápido.",
        "Eu estava decorando a resposta pra parecer espontânea.",
        "O universo conspirou pra eu esquecer o celular em outro cômodo.",
        "Respondi na minha cabeça de forma tão convincente que achei que tinha mandado.",
        "Estava numa competição interna de quem aguenta mais sem checar o celular.",
        "Meu teclado preditivo sugeriu algo estranho e eu entrei em crise existencial.",
        "Eu queria mandar um áudio, mas minha voz decidiu não cooperar.",
        "Estava esperando você mandar de novo pra parecer coincidência.",
        "Meu dedo escorregou e abriu outro aplicativo, isso conta como desculpa científica.",
        "Fiquei preso pensando se devia usar emoji ou não, foi uma decisão de vida."
    ],
    academia: [
        "Eu ia treinar, mas meu corpo abriu uma reunião e decidiu descansar.",
        "Minha roupa de treino desapareceu misteriosamente.",
        "Fiz treino mental hoje, conta como exercício.",
        "Meu tênis de treino estava em greve por falta de reconhecimento.",
        "Achei que 'dia de descanso' era todo dia até prova em contrário.",
        "Minha vontade de treinar foi treinar em outro lugar sem mim.",
        "Estava fazendo alongamento avançado, isso é, deitado no sofá.",
        "A academia parecia mais longe hoje, deve ser efeito óptico.",
        "Meu corpo mandou um comunicado oficial pedindo férias coletivas.",
        "Assisti um vídeo de treino inteiro, isso conta como cardio visual.",
        "Minha playlist de treino não carregou e sem música não rola.",
        "Fiquei acumulando energia pra um treino ainda mais épico depois.",
        "Meu shake de proteína virou meu jantar e isso já é um progresso.",
        "Estava economizando energia pra subir escada em casa mais tarde.",
        "Achei que pensar em malhar libera as mesmas endorfinas.",
        "Meu joelho fez um barulho estranho e eu respeitei o aviso.",
        "A previsão do tempo disse pra eu ficar em casa, quem sou eu pra duvidar.",
        "Estava numa maratona de decisões difíceis, tipo o que comer no lanche.",
        "Meu personal trainer imaginário cancelou a sessão de hoje.",
        "Contei os passos até a geladeira, já é um treino funcional.",
        "Minha determinação foi treinar sem mim de novo.",
        "Estava guardando energia pra amanhã, que sempre é o dia perfeito.",
        "Fiz um treino de resistência mental resistindo à vontade de ir treinar."
    ],
    familia: [
        "Eu achei que alguém já tinha feito.",
        "Eu estava esperando o momento perfeito.",
        "Eu organizei tudo na minha cabeça, só faltou fazer.",
        "Achei que isso era responsabilidade coletiva da família toda, inclusive do cachorro.",
        "Eu ia fazer, mas fui distraído pensando em fazer.",
        "Estava esperando alguém perguntar de novo pra parecer que eu lembrei sozinho.",
        "Minha lista de tarefas tem vida própria e some quando eu preciso dela.",
        "Achei que 'depois' era um horário oficial reconhecido pela família.",
        "Eu tinha certeza que já tinha avisado, no meu sonho de ontem.",
        "Estava calculando o momento estratégico ideal pra não incomodar ninguém.",
        "Meu cérebro guardou isso numa gaveta que ele mesmo perdeu a chave.",
        "Eu jurava que isso era tarefa de outra pessoa, com convicção total.",
        "Estava esperando o grupo de família decidir por unanimidade.",
        "Achei que pensar em resolver já contava como resolvido.",
        "Eu ia avisar, mas o WhatsApp da família tem 900 mensagens não lidas.",
        "Minha memória decidiu tirar férias justamente nesse assunto.",
        "Estava esperando alguém mais responsável assumir a liderança da tarefa.",
        "Eu tinha um plano perfeito, só esqueci de executar ele.",
        "Achei que isso ia se resolver sozinho, tipo mágica doméstica.",
        "Estava ocupado imaginando como seria bom já ter feito.",
        "Eu passei perto da tarefa várias vezes, quase conta como progresso.",
        "Minha boa vontade estava presente, só a ação que faltou aparecer.",
        "Achei que era pra semana que vem, sempre acho isso."
    ]
};

botaoGerar.addEventListener("click", () => {

    if(categoriaSelecionada === ""){
        resultado.innerHTML =
        "Escolha uma categoria primeiro.";
        return;
    }

    analise.innerHTML =
    "Analisando desculpa...";

    barra.style.width = "0%";

    setTimeout(() => {
        const lista = desculpas[categoriaSelecionada];
        const indice = Math.floor(Math.random() * lista.length);
        const desculpaGerada = lista[indice];
        const nivel = Math.floor(Math.random() * 101);

        barra.style.width = nivel + "%";

        credibilidade.innerHTML =
        "Credibilidade: " + nivel + "%";

        resultado.innerHTML =
        desculpaGerada;

        salvarHistorico(desculpaGerada);
        if(nivel < 40){
            analise.innerHTML =
            "Desculpa muito suspeita.";
        }
        else if(nivel < 80){
            analise.innerHTML =
            "Desculpa aceitável.";
        }
        else{
            analise.innerHTML =
            "Desculpa profissional detectada.";
        }
    },1500);
});
botaoCopiar.addEventListener("click", () => {

    navigator.clipboard.writeText(resultado.innerText);

    botaoCopiar.innerHTML =
    "Copiado!";

    setTimeout(() => {
        botaoCopiar.innerHTML =
        "Copiar desculpa";
    },2000);
});

function salvarHistorico(texto){
    let historico =
    JSON.parse(localStorage.getItem("historico")) || [];

    historico.unshift(texto);
    historico = historico.slice(0,5);
    localStorage.setItem(
        "historico",
        JSON.stringify(historico)
    );
    carregarHistorico();
}
function carregarHistorico(){
    listaHistorico.innerHTML = "";
    let historico =
    JSON.parse(localStorage.getItem("historico")) || [];
    historico.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item;
        listaHistorico.appendChild(li);
    });
}
carregarHistorico();

botaoMusica.addEventListener("click", () => {
    if(musica.paused){
        musica.play();
        botaoMusica.innerHTML =
        "Pausar música";

    }else{
        musica.pause();
        botaoMusica.innerHTML =
        "Tocar música";
    }
});
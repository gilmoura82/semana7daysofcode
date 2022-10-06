//alert("Seja Bem Vindo Ao 7 Days Of Code");


//                   Dia 1                      \\

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

const botaoDia1 = document.querySelector(".dia1");

function btnComparaVariaveis() {
    comparaVariaveis(botaoDia1);
}

function comparaVariaveis() {

    alert("Essa função foi criada apenas para comparar variáveis e seu tipo!" + "\n");
    alert("Variáveis numeroUm = 1 e stringUm = '1' " + "\n" + "Variáveis numeroTrinta = 30 e stringTrinta = '30' " + "\n" + " Variáveis numeroDez = 10 e stringDez = '10' " + "\n");
    
    if (numeroUm !== stringUm){
            alert('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
        } else {
            alert('As variáveis numeroUm e stringUm não tem o mesmo valor')
        }
        
    if (numeroTrinta === stringTrinta){
            alert('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
        } else {
            alert('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
        }
        
    if (numeroDez == stringDez) {
            alert('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
        } else {
            alert('As variáveis numeroDez e stringDez não tem o mesmo valor')
        }
}

// ======================================================================================================= \\

  //                                 Dia 2                                       \\

const botao = document.querySelector("button");

function btnPerguntaDev() { // Executa a função ao clicar no Botão
    perguntasDev(botao); // Parâmetro capturado no HTML
}

function perguntasDev () {
    const nome = prompt("Qual é o seu nome");
    const idade = prompt("Qual é a sua idade?");
    const linguagem = prompt("Qual linguagem você está estudando?");

alert("Olá " + nome + ", você tem " + idade + 
" anos e está aprendendo a linguagem " + linguagem);

const pergunta = prompt("Você está gostando de aprender " + linguagem + " ?. Responda com 1 para sim ou 2 para não");

if (pergunta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (pergunta == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
}

// ======================================================================================================= \\


    //                       Dia 3                         \\

const botaoDia3 = document.querySelector(".dia3");

function btnFluxoDecisao() {
    fluxoDecisao(".bdia3")
}

function fluxoDecisao() {
    const nome = prompt("Olá, Qual é o seu nome?");
    alert(nome + " Seja bem vindo ao jogo da programação!!!");
    const area = prompt(nome + ", qual área você quer seguir? Front-End ou Back-End? Informe o nome da área");
    let linguagem = "";

    // Validação Front-End Ou Back-End

    if (area === 'Front-End') {
        alert("Você escolheu Front-End")
        linguagem = prompt("Você quer aprender React ou Vue?");
        alert(nome + ", parabéns!!! você escolheu aprender " + linguagem);
    } 
    else if (area === 'Back-End') {
        linguagem = prompt("Você quer aprender C# ou Java?")
    }
    else {
        alert("Você não informou uma área válida!");
    }

    // Validação Fullstack

    const especializacaoFullstack = prompt("Digite 1 para continuar se especializando na área escolhida " + " (" + linguagem + ") ou 2 para seguir se desenvolvendo para se tornar um Dev Fullstack");

    if (especializacaoFullstack == 1) {
        alert(`Continue se especializando em ${linguagem} para dominar a área que você escolheu ${area}!`)
    }
    else if (especializacaoFullstack == 2) {
        alert(`Está na hora de começar a aprender outras linguagens além de ${linguagem} para se tornar um Dev Fullstack!`);
    }
    else {
        alert("Operação inválida!");
    }
    
    let msg = prompt("Tem mais alguma tecnologia que gostaria de se aprofundar? Digite sim em caso positivo ");

    while (msg === 'sim') {
        
        let novaTecnologia = prompt("Qual?");
        alert(`${novaTecnologia} é realmente muito legal de aprender`);
        msg = prompt("Tem mais alguma tecnologia que gostaria de aprender? Digite sim não");
        
    }
        if (msg === 'não') {
            alert("Lembre-se que será necessário muito estudo e prática!!!");
        }
}

// ======================================================================================================= \\

           //                    Dia 4                        \\

    const botaoDia4 = document.querySelector(".dia4");

    function btnLoops() {
        loopsRandom(".bdia4")
    }

    function loopsRandom() {
        const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
        let chute = "";
        let acertou = false;
        const nome = prompt("Olá, qual é o seu nome?");
        alert(nome + " Bem Vindo ao Jogo de Advinhação !!!");

        for(let contador = 0; contador < 3; contador++){    
            chute = prompt("Tente adivinhar o número de 0 a 10:");
        if(chute == numeroAdivinhacao){
            alert(`Parabéns, você acertou! O número escolhido era: ${numeroAdivinhacao}.`);
            acertou = true;
            break;
        }
            alert("Você Errou!!");
        }
        if(!acertou){
            alert(`Infelizmente, você não acertou. O número escolhido era: ${numeroAdivinhacao}!`);
        }
    }

    // ======================================================================================================= \\

        //                        Dia 5                           \\

        const botaoDia5 = document.querySelector(".dia5");
    

        function btnListaCompras() {
            listaCompras(".bdia5");
        }

        function listaCompras() {
        
        let frutas = [];
        let laticinios = [];
        let doces = [];
        let congelados = [];
        let comida = "";
        let categoria = "";

        let adicionarMais = "sim";  // valor inicial como "sim", para que primeiro entre no laço
        while(adicionarMais != "não"){
            adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
            while (adicionarMais != "sim" && adicionarMais != "não") {  // enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
            alert(`Operação não reconhecida!`);
                adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
            }
            
            if (adicionarMais === "não"){  // se o texto lido for "não", sair do while
                break;
            }
            
            comida = prompt("Qual comida você deseja inserir?");
            categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
            if(categoria === 'frutas'){
                frutas.push(comida);
            } else if (categoria === 'laticínios'){
                laticinios.push(comida);
            } else if (categoria === 'doces'){
                doces.push(comida);
            } else if (categoria === 'congelados'){
                congelados.push(comida);
            } else {
                alert("Essa categoria não foi pré-definida.")
            }
        }
        alert(`Você finalizou sua Lista de Compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);

        }

        // ======================================================================================================= \\

        //                      Dia 6                        \\

        const botaoDia6 = document.querySelector(".dia6");

        function btnListaComprasRemover() {
            alert("Olá, essa funcionalidade é continuação da Lista de Compras do dia 5, adicionando a função de remover itens")
            listaComprasRemover(".bdia6");
        }
        

        function listaComprasRemover() {
            let frutas = [];
            let laticinios = [];
            let doces = [];
            let congelados = [];
            let comida = "";
            let categoria = "";
            let remover = "";

            let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
            while(adicionarMais != "não"){
                if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
                    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
                } else {
                    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
                }
	
            while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") {  //enquanto o texto lido for diferente de "sim", "não" e "remover", exibir que não foi reconhecido e perguntar novamente
            alert(`Operação não reconhecida!`);
                adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
            }
	
            if (adicionarMais === "não"){  //se o texto lido for "não", sair do while
                break;
            }
	
        if(adicionarMais === "sim"){
            comida = prompt("Qual comida você deseja inserir?");
            categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
            if(categoria === 'frutas'){
                frutas.push(comida);
            } else if (categoria === 'laticínios'){
                laticinios.push(comida);
            } else if (categoria === 'doces'){
                doces.push(comida);
            } else if (categoria === 'congelados'){
                congelados.push(comida);
            } else {
                alert("Essa categoria não foi pré-definida.")
            }
        } else if(adicionarMais === "remover"){
        if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
            alert(`A lista está vazia!`);
        } else {  //se a lista não estiver vazia
            remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
            if(frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (doces.indexOf(remover) != -1){
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (congelados.indexOf(remover) != -1){
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
        }
}
        alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
        
        }    

        // ======================================================================================================= \\
            
       //                      Dia 7                        \\ 

       const botaoDia7 = document.querySelector(".dia7");

       function btnCalculadora() {
            calculadora("bdia7");
       }

       function calculadora() {

            let nome = prompt("Olá, qual é o seu nome?");

            function soma(valor1, valor2){
                return Number(valor1) + Number(valor2);
            }
            
            function subtracao(valor1, valor2){
                return Number(valor1) - Number(valor2);
            }
            
            function multiplicacao(valor1, valor2){
                return Number(valor1) * Number(valor2);
            }
            
            function divisao(valor1, valor2){
                return Number(valor1) / Number(valor2);
            }
            
            let valor1;
            let valor2;
            let operacao = "";
            
            do {  // usando o 'do...while', pois é necessário entrar sempre na primeira vez
                
                operacao = prompt(`Qual operação você quer realizar? Responda soma, subtração, multiplicação, divisão ou sair.`);	
                while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {  // enquanto o texto digitado for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que a operação não foi reconhecida e perguntar novamente até que a condição seja atendida

                alert(`Operação não reconhecida!`);
                operacao = prompt(`Qual operação você quer realizar? Responda soma, subtração, multiplicação, divisão ou sair.`);
                }
                
                if (operacao === "sair"){  // se o texto lido for "sair", sair do loop e da calculadora
                    break;	
                }
                
                valor1 = prompt(`Insira o 1º valor:`);
                valor2 = prompt(`Insira o 2º valor:`);
                switch (operacao) {
                    case 'soma':
                      alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
                      break;
                    case 'subtração':
                        alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
                        break;
                    case 'multiplicação':
                        alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
                        break;
                    case 'divisão':
                        alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
                        break;
                }
            } while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
            alert(`Até a próxima!`);
        
    }

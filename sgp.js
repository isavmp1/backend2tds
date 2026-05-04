// sistema de gerenciamento de personagem

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0);
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDaMissao = function(missao) {
        const foiFinalizada = missao.status === "concluída"; //=== Igualdade ESTRITA
        return foiFinalizada;
    };


    const apenasConcluidas = listasDeMissoes.filter(verificarStatusDaMissao);
    return apenasConcluidas
};

function atualizarInventario(inventarioAtual) {
    let novoInventario;
    if(acao === "pegar"){
        const inventarioComItemNovo = [inventarioAtual, NomeDoItem];
        novoInventario = inventarioComItemNovo;

    }else if (acao === descartar) {
        const inventarioSemUltimoItemNovo = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
        } else {
            novoInventario = inventarioAtual
        }
        return novoInventario; //Retornar a mochila do jogador atualizada
};

const pontosDoJogador =[100,50,200,10]
const total = calcularPontuacaoTotal(pontosDoJogador);
console.log("Pontuação Final:",total);

const missoes = [
    {nome: "Salvar a aldeia", status: "concluída"},
    {nome: "Encontrar o mapa", status: "em andamento"},
    {nome: "Derrotar o chefão", status: "falhou"},
    {nome: "Coletar recursos", status: "concluída"},
];


console.log(missoes);

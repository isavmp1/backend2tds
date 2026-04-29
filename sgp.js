// sistema de gerenciamento de personagem

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };
    
    const pontuacaoFinal = historicoDePontosDePontos.reduce(somarRodade, 0);
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


IARA VITORIA FERREIRA
10:53 (há 0 minuto)
para mim

function atualizarInventario(inventarioAtual) {
    let novoInventario;
    if(acao === "pegar"){
        const inventarioComItemNovo = [inventarioAtual, NomeDoItem];
        novoInventario = inventarioComItemNovo;

    }else if (acao === descartar) // parei aqui
}

const pontosDoJogador =[100,50,200,10]
console.log(pontosDoJogador);

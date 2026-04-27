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
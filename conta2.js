function criarConta (titular, saldoInicial) { I
    let saldo = saldoInicial;


    return {
        titular,
        depositar (valor) {
            if (valor <= 0 ) {
                console.log("Valor do depósito inválido.");
                return; //Parar o processo.
            }
            saldo += valor;
       },
       sacar(valor) {
           if (valor >= saldo) {
               console.log("Saque realizado com sucesso!");
               return;
           }
           saldo -= valor;
       },
       get saldoAtual() {
           return saldo;
       },
    };
};

const contas = [criarConta("isa", 3000),criarConta("gustavo", 2500)];
//                               0

//contas[0].depositar(0);
contas[1].sacar(100)

contas.forEach((conta) => { //forEach > para cada item do array
    console.log('${conta.titular} tem R$ ${conta.saldoAtual}');
})

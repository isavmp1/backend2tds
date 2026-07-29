let saldoisa = 1000;
let saldoaly = 500;

const taxaJuros = 0.02;
const saldoComJuros = saldoIsa * (1 + taxaJuros);

const contaIsa = {
  titular: "Isa",
  saldo: saldoIsa
  
};

const contaAly = {
titular: "Aly",
saldo: saldoAly
};
const contas = [contaIsa, contaAly]; //Array (lista)

contas.forEach((conta)) =>) {
  console.log('Titular: ${conta.titular} tem R$ ${conta.saldo}.`);
});

contaIsa.saldo = -5000;
console.log(Saldo alterado sem controle: ${contaIsa.saldo}`);

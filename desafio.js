//Declarar 5 variaveis para representar um funcionário
//fazer uma saída de forma interpolada(`${}`)
//Crie duas variaveis numericas e exiba uma soma ou multiplicação
//Declarar salario base e bonus. Calcular salário total e desconto de 10%
//A partir da declaração de anosEmpresa e salário, exiba se recebe promoção, se esta 

let nome = "Arthur";
let idade = 19;
let cargo = "Atendente";
let salario = 1800;
let folga = "escala 12 por 36";

console.log(`O funcionário ${nome}, de ${idade} anos, trabalha como ${cargo} na folga de ${folga} e recebe R$ ${salario}.`);

// Duas variáveis numéricas
let numero1 = 10;
let numero2 = 5;

// Exibindo a soma
console.log(`A soma de ${numero1} + ${numero2} é ${numero1 + numero2}.`);

// Exibindo a multiplicação
console.log(`A multiplicação de ${numero1} * ${numero2} é ${numero1 * numero2}.`);

let salarioBase = 1800;
let bonus = 500;

let salarioTotal = salarioBase + bonus;
let salarioFinal = salarioTotal - (salarioTotal * 0.10);

console.log(salarioFinal);
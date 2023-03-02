function soma(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

console.log   ("-------------- Teste de Operações / Calculadora --------------");

let resultSoma   = soma(2, 13)    ;
console.log("Resultados da Soma: " + resultSoma);

let resultSubtracao = subtracao(14, 3);
console.log("Resultados da Subtração: " + resultSubtracao);

let resultMultiplicacao = multiplicacao(resultSoma, resultSubtracao);
console.log(
  "Resultados da Multiplicação das Primeiras Operações: " + resultMultiplicacao
);

let resultDivisao = divisao(resultMultiplicacao, resultSubtracao);
console.log("Resultados da Divisão das Últimas Operações: " + resultDivisao);

let dividirZero = divisao(0, resultMultiplicacao);
console.log("Resultados da Divisão por Zero: " + dividirZero);

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarClique () {
console.log ('Foi clicado');
}
function alerta () {
    alert('Eu amo JS!');
}
function nomeCidade () {
     let cidade = prompt ('Diga uma Cidade qualquer do brasil!');
     alert(`Passei em ${cidade} e lembrei de você!`);
}
function soma () {
    num1 = 45
    num2 = 54
    resultado = num1 + num2;
    alert (`O resultado da soma entre ${num1} e ${num2} é ${resultado} `);
}
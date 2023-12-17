'use strict';

const senhaInput = document.querySelector("#inputSenhaId");
const tamanhoInput = document.querySelector("#inputTamanhoId");
const infoTamanho = document.querySelector('label[for="inputTamanhoId"]');
const botaoGerar = document.querySelector("#botaoGerar");

const caractMinusculas = document.querySelector("#chkMinuscId");
const caractMaiusculas = document.querySelector("#chkMaiuscId");
const caractNumeros = document.querySelector("#chkNumerosId");
const caractSimbolos = document.querySelector("#chkSimbolosId");

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolos = ['!', "@", "#", "$", "%"];

const caracteres = Array.from(Array(26)).map((_, i) => i + 97);

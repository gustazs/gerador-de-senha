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

const caracteres = Array.from(Array(26)).map((e, i) => i + 97);
const minusculasCaracteres = caracteres.map((item) => String.fromCharCode(item)); 
const maiusculasCaracteres = minusculasCaracteres.map((item) => item.toUpperCase());

infoTamanho.innerHTML = tamanhoInput.value;

tamanhoInput.addEventListener('change', () => {
    infoTamanho.innerHTML = tamanhoInput.value;
});

botaoGerar.addEventListener('click', () => {
    generatePassword(
        caractMinusculas.checked,
        caractMaiusculas.checked,
        caractNumeros.checked,
        caractSimbolos.checked,
        tamanhoInput.value
    );
});

const generatePassword = (
    temMinusculas,
    temMaiusculas,
    temNumeros,
    temSimbolos,
    tamanho
) => {
    const newArray = [
        ...(temMinusculas ? minusculasCaracteres : []),
        ...(temMaiusculas ? maiusculasCaracteres : []),
        ...(temNumeros ? numeros : []),
        ...(temSimbolos ? simbolos : [])
    ];
    if (newArray.length === 0) return;
    let password = "";

    for (let i = 0; i < tamanho; i++) {
        const aleatorioIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[aleatorioIndex];
    }

    senhaInput.value = password;
}

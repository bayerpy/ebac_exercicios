"use strict";
function dizOla(name) {
    try {
        return `Olá ${name}! O valor da sua multiplicação é: `;
    }
    catch (error) {
        console.error('Ocorreu um erro', error);
        return '';
    }
}
function fazMultiplicacao(valorA, valorB) {
    try {
        return (valorA * valorB);
    }
    catch (error) {
        console.error('Ocorreu um erro', error);
        return 0;
    }
}

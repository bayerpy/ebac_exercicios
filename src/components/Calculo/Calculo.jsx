import React, { useState } from 'react';
import './Calculo.css'


function Calculo() {
const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('a');
const [imc, setImc] = useState(null);
const [classificacao, setClassificacao] = useState('');

const calcularIMC = () => {
    if (altura && peso) {
    const alturaMetros = altura / 100;
      const imcCalculado = (peso / (alturaMetros ** 2)).toFixed(2);
    setImc(imcCalculado);
    classificarIMC(imcCalculado);
    }
};

const classificarIMC = (imc) => {
    if (imc < 18.5) {
    setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
    setClassificacao('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
    setClassificacao('Sobrepeso');
    } else {
    setClassificacao('Obesidade');
    }
};

return (
    <div className="Calculo">
    <h1>Calculadora de IMC</h1>
    <form onSubmit={(e) => e.preventDefault()}>
        <div>
        <label htmlFor="altura">Altura (cm): </label>
        <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor="peso">Peso (kgs): </label>
        <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
        />
        </div>
        <button type="button" onClick={calcularIMC}>Calcular IMC</button>
    </form>
    {imc && (
        <div>
        <h2>Seu IMC é: {imc}</h2>
        <h3>Classificação: {classificacao}</h3>
        </div>
    )}
    </div>
);
}

export default Calculo;

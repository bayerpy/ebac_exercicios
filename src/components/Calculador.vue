<script setup>
import { reactive } from 'vue';

const estado = reactive({
primeiroNumero: '',
segundoNumero: '',
operacoes: {
soma: (a, b) => a + b,
subtracao: (a, b) => a - b,
multiplicacao: (a, b) => a * b,
divisao: (a, b) => (b !== 0 ? a / b : 'Não Existe Divisão Por Zero'),
},
resultado: 0,
});

const calculaResultado = () => {
const { primeiroNumero, segundoNumero, operacaoMatematica } = estado;
const num1 = parseFloat(primeiroNumero);
const num2 = parseFloat(segundoNumero);
estado.resultado = !isNaN(num1) && !isNaN(num2) ? estado.operacoes[operacaoMatematica](num1, num2) : 'Entrada inválida';
};
</script>

<template>
    <div class="container">
        <h1 class="fs-1 title">Calculadora Aritmética VueJS</h1>

        <input type="number"  class="form-control" v-model="estado.primeiroNumero" @input="calculaResultado" />

        <input type="number"  class="form-control mt-2" v-model="estado.segundoNumero" @input="calculaResultado" />


<select class="mt-3 mb-1" v-model="estado.operacaoMatematica" @change="calculaResultado">
    <option value="soma">Soma</option>
    <option value="subtracao">Subtração</option>
    <option value="multiplicacao">Multiplicação</option>
    <option value="divisao">Divisão</option>
</select>
<p>
    Resultado: {{ estado.resultado }}
</p>

    </div>
</template>

<style>
.title{
    text-align: center;
    padding: 20px;
}

.container{
    max-width: 960px;
}
</style>
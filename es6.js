const arrayDeObjetos = [
    {nome: 'Gabriel', nota: 10},
    {nome: 'José', nota: 5},
    {nome: 'João', nota: 8},
    {nome: 'Jhonathan', nota: 4},
    {nome: 'Maria', nota: 9},
    {nome: 'Livia', nota: 2},
]

function filtrarAprovados(arrayDeObjetos) {
    return arrayDeObjetos.filter(arrayDeObjetos => arrayDeObjetos.nota >= 6);
}

const alunosAprovados = filtrarAprovados(arrayDeObjetos);
console.log(alunosAprovados)
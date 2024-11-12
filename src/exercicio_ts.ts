function dizOla(name: string): string {
    try {
        return `Olá ${name}! O valor da sua multiplicação é: `;
    }
    catch (error) {
        console.error('Ocorreu um erro', error);
        return '';
    }
}

function fazMultiplicacao(valorA: number, valorB: number): number {
    try {
        return (valorA * valorB);
    }
    catch (error) {
        console.error('Ocorreu um erro', error);
        return 0;
    }
}
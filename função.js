let contador = 0;
let chancePerder = 0;
let chanceDuplicar = 0;

function calcularChancePerder(){
 chancePerder = Math.min(100, chancePerder + 5);
}

function calcularChanceDuplicar(){
 chanceDuplicar = Math.min(100, chanceDuplicar + 1);
}

function determinarClasse(numeroAleatorio) {
    const classes = {
        23: 'Perdeu Muito',
        55: 'Perdeu Pouco',
        73: 'Ganhou Pouco',
        101: 'Ganhou Muito'
    };

    if (numeroAleatorio <= chancePerder) {
        return 'Perdeu Tudo';
    }

    if (numeroAleatorio > 100 - chanceDuplicar) {
        return 'Duplica';
}
    for (const limite in classes) {
        if (numeroAleatorio <= limite) {
            return classes[limite];
        }
    }

    return 'Duplica';
}

function gerarFuncaoAleatoria() {
    contador++;

    calcularChancePerder();
    calcularChanceDuplicar();

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const classe = determinarClasse(numeroAleatorio);

    if (classe === 'Perdeu Tudo') {
        chancePerder = 0;
    }

    if (classe === 'Duplica') {
        chanceDuplicar = 0;
    }

    const resultadoElement = document.getElementById("resultado");
    if (resultadoElement) {
        const resultadoString = `${numeroAleatorio} - ${classe} - Chance Perder: ${chancePerder.toFixed(2)}% - Chance Duplicar: ${chanceDuplicar.toFixed(2)}%`;
        resultadoElement.textContent = resultadoString;
    } else {
        console.error('Elemento com ID "resultado" não encontrado.');
    }
}

document.getElementById("gerar").addEventListener("click", gerarFuncaoAleatoria);

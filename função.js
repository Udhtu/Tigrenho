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
        101: 'Ganhemo demais'
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
    const imgURL = imgclasse(classe);
    const imagemElement = document.getElementById("imagem");

    if (imagemElement) {
        imagemElement.src = imgURL;
    } else {
        console.error('Elemento com ID "imagem" não encontrado.');
    }
}
 
function imgclasse(classe) {
// Cria um objeto para mapear valores a URLs de imagem
    const imageMap = {
       "Ganhemo demais": "https://cdn.discordapp.com/attachments/800172094783881226/1306082508831592529/sack.png?ex=67355f9f&is=67340e1f&hm=c296198af656727eb029750f22dc5ba6dac590810639217295d7a79171b43363&z",
       "Ganhou Pouco": "https://cdn.discordapp.com/attachments/800172094783881226/1306082506466000997/5yen.png?ex=67355f9f&is=67340e1f&hm=399e6e4e431cec70bf469f7e56862d1b61c2232b429d2d9e4b7727f66036b25f&",
       "Perdeu Muito": "https://cdn.discordapp.com/attachments/800172094783881226/1306082508600774656/merda.png?ex=67355f9f&is=67340e1f&hm=ad773a03d3d96c73dc855ae5f41827f83065ec7da30b0a8ccf5d63bb9c3ff3d4&",
       "Perdeu Pouco": "https://cdn.discordapp.com/attachments/800172094783881226/1306082508600774656/merda.png?ex=67355f9f&is=67340e1f&hm=ad773a03d3d96c73dc855ae5f41827f83065ec7da30b0a8ccf5d63bb9c3ff3d4&",
       "Perdeu Tudo": "https://cdn.discordapp.com/attachments/800172094783881226/1306082507900452914/maca.png?ex=67355f9f&is=67340e1f&hm=1df799eb98ce6488d2b12fd86f22b4764d317bc7cfe4aaa43153deb592e7491c&",
       "Duplica": "https://cdn.discordapp.com/attachments/800172094783881226/1306082507380359238/diamante.png?ex=67355f9f&is=67340e1f&hm=346ddcccca2ca5548a2c00cc864feaa7138d71c5924eb5021ecdc4fd887c54af&"
       // Adicione mais valores conforme necessário
    };

    return imageMap[classe] || "https://exemplo.com/imagem_padrao.jpg";
}

document.getElementById("gerar").addEventListener("click", gerarFuncaoAleatoria);

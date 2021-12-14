let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') //Renderiza o desenho no canvas
let box = 32 // tamanho de cada quadradinho em px

function criarBG () {
    context.fillStyle = 'lightgreen'
    context.fillRect(0,0,16*box, 16*box) // Desenha o retângulo da área do jogo (x,y,altura,largura)
}

criarBG ()
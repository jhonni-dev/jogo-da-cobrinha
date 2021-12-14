let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') //Renderiza o desenho no canvas
let box = 32 // tamanho de cada quadradinho em px
let snake = [] // Array que define a cobrinha
snake[0] = {
    x: 8*box,
    y: 8*box
}

function criarBG () {
    context.fillStyle = 'lightgreen'
    context.fillRect(0,0,16*box, 16*box) // Desenha o retângulo da área do jogo (x,y,altura,largura)
}

function criarCobrinha () {
    for (i=0; i<snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

criarBG ()
criarCobrinha ()
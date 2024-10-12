const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = (  ) => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {
    //verificando se ao bater no pipe o "Loop" acaba, funcionando
    console.log('loop')
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
     
    //condicional
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'imagem/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft= '50px'

        //para o loop assim que tocar no pipe
        clearInterval(loop);
    }

}
    , 10);

//declarando um evento no teclado, ao apertar qualquer tecla, com a classe jump
document.addEventListener('keydown', jump);

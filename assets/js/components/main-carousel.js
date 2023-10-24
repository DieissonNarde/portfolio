// 1 - Acessar a Janela (browser)
// 2 - Pegar HTML todo
// 3 - Pegar o botão
// 4 - Saber que está sendo clicado no botão

// 1 - Acessar a Janela (browser)
// 2 - Pegar HTML todo
// 3 - Pegar o elements
// 4 - Mover o elements para direita

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
})

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
})
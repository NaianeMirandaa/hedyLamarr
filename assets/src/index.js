const buttons_back = document.querySelectorAll('.button_back'),
      buttons_next = document.querySelectorAll('.button_next'),
      blocos = document.querySelectorAll('.bloco');

let indexAtual = 0;

buttons_back.forEach(button_back => {
    button_back.addEventListener('click',()=>{
        blocos[indexAtual].classList.remove('pagina_atual');
        indexAtual--;
        blocos[indexAtual].classList.add('pagina_atual');
    });
});
buttons_next.forEach(button_next => {
    button_next.addEventListener('click',()=>{
        blocos[indexAtual].classList.remove('pagina_atual');
        indexAtual++;
        blocos[indexAtual].classList.add('pagina_atual');
    });
});
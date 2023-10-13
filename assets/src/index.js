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

// galeria filmografia

const controls = document.querySelectorAll('.controls');
const filmeGaleria = document.querySelectorAll('.filme_galeria');
const maxFilmes = filmeGaleria.length;
let filmeAtual = 0;


controls.forEach(control=>{
    control.addEventListener('click',()=>{
        const voltar = control.classList.contains('button_back--f');
        
        if(voltar){
            filmeAtual--;
        }else{
            filmeAtual++
        }
        
        if(filmeAtual >= maxFilmes){
            filmeAtual = 0;
        }
        if(filmeAtual < 0){
            filmeAtual = maxFilmes - 1;
        }

        filmeGaleria.forEach(filme=>{
            filme.classList.remove('filme_atual');
        })
        filmeGaleria[filmeAtual].scrollIntoView({inline:'center',behavior:'smooth'});

        filmeGaleria[filmeAtual].classList.add('filme_atual');

        console.log('clicado',voltar, filmeAtual);
    })
});
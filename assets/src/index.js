const botaoPrincipal = document.querySelector('.botao_principal'),
      botaoSecundario = document.querySelector('.botao_secundario');


botaoPrincipal.addEventListener('click',()=>{botaoSecundario.classList.toggle('open')
botaoPrincipal.classList.toggle('open');})
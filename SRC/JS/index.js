
function trocarPersonagem(elementoAtual, elementoTroca) {
  var atual = document.getElementById(elementoAtual);
  var troca = document.getElementById(elementoTroca);

  atual.style.display = "none";
  troca.style.display = "block";
}


const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter',() => {

      if(window.innerWidth< 450) {

        window.scrollTo({top: 0, behavior: 'smooth'});

      }

      const personagemSelecionado = document.querySelector('.selecionado');
       
        personagem.classList.add('selecionado');

        if (personagemSelecionado) {
          personagemSelecionado.classList.remove('selecionado');
        }
        
      const imagemPersonagemGrande = document.querySelector('.personagem-grande');
            
            const idPersonagem = personagem.attributes.id.value
            imagemPersonagemGrande.src = `/src/img/gif-dbz/card-${idPersonagem}.gif`; 	

            const nomePesonagem = document.getElementById('nome-personagem');
            nomePesonagem.innerText = personagem.getAttribute('data-name');

            const descriçaoPersonagem = document.getElementById('descricao-personagem');
            descriçaoPersonagem.innerText = personagem.getAttribute('data-description')
  })
})  
  
  
  
  
  
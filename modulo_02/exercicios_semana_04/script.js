const episodios = [
    {
        id: 1,
        episodio: 'T1:01',
        tempo: '24min',
        imagem: 'images/cena01.png'
    },
    {
        id: 2,
        episodio: 'T1:02',
        tempo: '26min',
        imagem: 'images/cena02.png'

    },
    {
        id: 3,
        episodio: 'T1:03',
        tempo: '29min',
        imagem: 'images/cena03.png'

    }
]

const listaEpisodios = document.getElementById('lista-episodios')

episodios.forEach(episodios => {
    const cardEpisodio = document.createElement('div')
    cardEpisodio.className = 'card-episodio'
    cardEpisodio.innerHTML = `
                            <span>${episodios.episodio}</span>
                            <span>${episodios.tempo}</span>

                            <a href="https://www.youtube.com/watch?v=bS5P_LAqiVg" target= "blank">

                            <img src="${episodios.imagem}"> 

                            </a>
                              
                                        `
    console.log(cardEpisodio)
    listaEpisodios.appendChild(cardEpisodio)


})

// ------------- MENU DA APLICAÇÃO -------------

const sobre = document.getElementById('sobre')
sobre.addEventListener('click', function(){
    alert("Página em construção")
})

const trailer = document.getElementById('trailer')
trailer.addEventListener('click', function(){
    alert("Página em construção")
})

const atores = document.getElementById('atores')
atores.addEventListener('click', function(){
    alert("Página em construção")
})

const avaliacoes = document.getElementById('avaliacoes')
avaliacoes.addEventListener('click', function(){
    alert("Página em construção")
})



// ------------- REDES SOCIAIS -------------

const instagram = document.getElementById('insta');
instagram.addEventListener('click', function () {
    open('http://www.instagram.com', '_blank');
});

const twitter = document.getElementById('twt')
twitter.addEventListener('click', function () {
    open('http://www.twitter.com', '_blank');
});

const facebook = document.getElementById('face')
facebook.addEventListener('click', function () {
    open('http://www.facebook.com', '_blank');
});



// ------------- BOTOES DE SCROLL -------------

document.getElementById('btnDireita').addEventListener('click', function() {

    document.getElementById('lista-episodios').scrollLeft += 230; 
  });
  
  document.getElementById('btnEsquerda').addEventListener('click', function() {

    document.getElementById('lista-episodios').scrollLeft -= 230;
  });
  






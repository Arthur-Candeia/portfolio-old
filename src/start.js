export async function load() {
  const startDiv = document.getElementById('animation-start-background');
  const startText = document.getElementById('animation-start-text');
  const body = document.querySelector('body');
  const main = document.querySelector('main')
  
  body.scroll = 'no';
  body.style.backgroundColor = '#ffffff'
  startDiv.style.animation = 'growth 4s forwards ease';
  setTimeout(() => { //Animação de aparição do texto
    startText.style.animation = 'textToApear 1s forwards ease';
  }, 1550)

  setTimeout(() => {//Animação de desvanecer e carregamento da página
    startDiv.style.animation = 'toVanishDiv 1.5s forwards ease';
    startText.style.animation = 'toVanishText 1.5s forwards ease';
    body.style.backgroundColor = '#111'
    main.style.display = 'block';
  }, 4000)

  setTimeout(() => { //Reativação scroll e exclusão dos elementos start
    startDiv.style.display = 'none';
    startText.style.display = 'none';
    body.style.overflow = 'auto';
    body.scroll = 'yes'
  }, 5500)
}
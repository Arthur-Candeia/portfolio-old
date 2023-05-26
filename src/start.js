export async function load() {
  const startDiv = document.getElementById('animation-start-background');
  const startText = document.getElementById('animation-start-text');
  const body = document.querySelector('body')

  body.scroll = 'no'
  startDiv.style.animation = 'growth 4s forwards ease';
  setTimeout(() => {
    startText.style.animation = 'textToApear 1s forwards ease';
  }, 1550)

  setTimeout(() => {
    startDiv.style.animation = 'toVanishDiv 1.5s forwards ease';
    startText.style.animation = 'toVanishText 1.5s forwards ease';
  }, 4000)

  setTimeout(() => {
    startDiv.style.display = 'none';
    startText.style.display = 'none';
    body.style.overflow = 'auto';
    body.scroll = 'yes'
  }, 5500)
}


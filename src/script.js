import { load } from "./start.js";
load()

let ft = 2
const navbarButtons = document.querySelectorAll('#navbar > a')
document.querySelector('.bi:nth-child(1)').style.color = 'white'

const viewScroll = () => {
  const totalScroll = document.body.scrollTop || document.documentElement.scrollTop
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scroll = (totalScroll / windowHeight) * 100


  if (scroll < 65) {
    for(let i=1; i<=5; i++) {document.querySelector(`.bi:nth-child(${i})`).style.color = '#4dff91'}
    document.querySelector('.bi:nth-child(1)').style.color = 'white'
  }
  else if (scroll <= 100) {
    for(let i=1; i<=5; i++) {document.querySelector(`.bi:nth-child(${i})`).style.color = '#4dff91'}
    document.querySelector('.bi:nth-child(2)').style.color = 'white'
  }
}

navbarButtons.forEach((element) => {
  element.addEventListener('click', viewScroll)
})

window.addEventListener('scroll', viewScroll)


setInterval(() => {
  const imgs = document.querySelectorAll('.project > img')

  imgs.forEach((element) => {
    const currentPath = element.getAttribute('src').slice(0, 36)
    element.setAttribute('src', `${currentPath}${ft}.png`)
  })
  
  ft++
  ft > 4 ? ft = 1 : ft;
}, 3500)
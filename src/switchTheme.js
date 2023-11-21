export function switchThemeFunction() {
  const switchThemeBtn = document.getElementById('switchThemeBtn')

  if (switchThemeBtn.innerText == 'Switch Theme | 🌙') {
    switchThemeBtn.innerText = 'Switch Theme | ☀️'
    switchThemeBtn.style.borderColor = 'black'
    switchThemeBtn.style.color = 'black'
    document.querySelector('body').style.backgroundColor = '#eeeeeec9'

    document.querySelector('#presentation').style.background = "black url('../images/backgrounds/background1light.jpg') center center no-repeat fixed"
    document.querySelector('#presentation').style.backgroundSize = "cover"
    document.querySelector('#hard-skills').style.background = "black url('../images/backgrounds/background1light.jpg') center center no-repeat fixed"
    document.querySelector('#hard-skills').style.backgroundSize = "cover"
    document.querySelector('#contact').style.background = "black url('../images/backgrounds/background1light.jpg') center center no-repeat fixed"
    document.querySelector('#contact').style.backgroundSize = "cover"
    document.querySelector('#name').style.color = '#000'
    document.querySelectorAll('#presentation-info > .presentation-buttons > .link-social > svg').forEach((element) => element.parentElement.classList.add('link-social-white-theme'))

    const elements = document.querySelectorAll('p,li,a')
    elements.forEach((element) => {
      element.classList.remove('mode-dark')
      element.classList.add('mode-light')
    })

    const spanSkill = document.querySelectorAll('#hard-skills-cards > .hard-skills-card > span')
    spanSkill.forEach((element) => {
      element.style.color = 'black'
    })

    const projectsLinks = document.querySelectorAll('#projects > aside > .project > .project-button')
    projectsLinks.forEach((element) => {
      element.style.borderColor = 'black'
    })

    const linkRepositories = document.querySelectorAll('.repository')
    linkRepositories.forEach((element) => {
      element.id = 'repository-light'
    })
  }

  else {
    switchThemeBtn.innerText = 'Switch Theme | 🌙'
    switchThemeBtn.style.borderColor = 'white'
    switchThemeBtn.style.color = 'white'
    document.querySelector('body').style.backgroundColor = '#000'

    document.querySelector('#presentation').style.background = ''
    document.querySelector('#hard-skills').style.background = ''
    document.querySelector('#contact').style.background = ''
    document.querySelector('#name').style.color = ''
    document.querySelectorAll('#presentation-info > .presentation-buttons > .link-social > svg').forEach((element) => element.parentElement.classList.remove('link-social-white-theme'))

    const elements = document.querySelectorAll('p,li,a')
    elements.forEach((element) => {
      element.classList.remove('mode-light')
      element.classList.add('mode-dark')
    })
    
    const spanSkill = document.querySelectorAll('#hard-skills-cards > .hard-skills-card > span')
    spanSkill.forEach((element) => {
      element.style.color = 'white'
    })

    const projectsLinks = document.querySelectorAll('#projects > aside > .project > .project-button')
    projectsLinks.forEach((element) => {
      element.style.borderColor = 'white'
    })

    const linkRepositories = document.querySelectorAll('.repository')
    linkRepositories.forEach((element) => {
      element.id = 'repository-dark'
    })
  }
}
export function switchThemeFunction() {
  const switchThemeBtn = document.getElementById('switchThemeBtn')

  if (switchThemeBtn.innerText == 'Switch Theme | 🌙') {
    switchThemeBtn.innerText = 'Switch Theme | ☀️'
    switchThemeBtn.style.borderColor = 'black'
    switchThemeBtn.style.color = 'black'
    document.querySelector('body').style.backgroundColor = 'white'

    const elements = document.querySelectorAll('p,li,a')
    elements.forEach((element) => {
      element.classList.remove('mode-dark')
      element.classList.add('mode-light')
    })

    const spanSkill = document.querySelectorAll('#hard-skills-cards > .hard-skills-card > span')
    spanSkill.forEach((element) => {
      element.style.color = 'black'
    })

    const projectsLinks = document.querySelectorAll('#projects > .project > .project-button')
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
    document.querySelector('body').style.backgroundColor = '#111'

    const elements = document.querySelectorAll('p,li,a')
    elements.forEach((element) => {
      element.classList.remove('mode-light')
      element.classList.add('mode-dark')
    })
    
    const spanSkill = document.querySelectorAll('#hard-skills-cards > .hard-skills-card > span')
    spanSkill.forEach((element) => {
      element.style.color = 'white'
    })

    const projectsLinks = document.querySelectorAll('#projects > .project > .project-button')
    projectsLinks.forEach((element) => {
      element.style.borderColor = 'white'
    })

    const linkRepositories = document.querySelectorAll('.repository')
    linkRepositories.forEach((element) => {
      element.id = 'repository-dark'
    })
  }
}
export function switchThemeFunction() {
  const switchThemeBtn = document.getElementById('switchThemeBtn')

  if (switchThemeBtn.innerText == 'Switch Theme | 🌙') {
    switchThemeBtn.innerText = 'Switch Theme | ☀️'
    document.body.id = 'light-theme'
    return
  }

  switchThemeBtn.innerText = 'Switch Theme | 🌙'
  document.body.id = ''
}
export function formSendEmail() {
  const name = document.getElementById('inputName')
  const email = document.getElementById('email')
  const message = document.getElementById('message')
  const templateParams = {from_name: name.value, message: message.value, email: email.value}
  emailjs.send('service_phs3wgw', 'template_aymz6k5', templateParams, '5UFSVyXB0fOhuYLeQ').then((result) => {

    name.value = ''
    email.value = ''
    message.value = ''

    const btn = document.querySelector('input[type="submit"]')
    btn.classList.add('sucess-send')
    btn.setAttribute('value', 'ENVIADO')
  }).catch((err) => {
    const btn = document.querySelector('input[type="submit"]')
    btn.classList.add('err-send')
    btn.setAttribute('value', 'ERRO AO ENVIAR')
  })
}
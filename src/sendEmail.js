import emailjs from '@emailjs/browser';

const templateParams = {from_name: name, message, email}
emailjs.send('service_ru58p5d', 'template_aymz6k5', templateParams, '5UFSVyXB0fOhuYLeQ').then((result) => console.log(result)).catch((err) => console.log(err))
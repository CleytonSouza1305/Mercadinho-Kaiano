const nome = document.getElementById('name').value
const email = document.getElementById('email').value
const cpf = document.getElementById('cpf').value
const address = document.getElementById('address').value
const houseNumber = document.getElementById('houseNumber').value
const complemento = document.getElementById('complemento').value

document.getElementById('enter-btn').addEventListener('click', function() {
   const nome = document.getElementById('name').value
   const email = document.getElementById('email').value
   const cpf = document.getElementById('cpf').value
   const address = document.getElementById('address').value
   const houseNumber = document.getElementById('houseNumber').value
   const complemento = document.getElementById('complemento').value

   if (nome === '' || nome.length < 3) {
      const p = document.createElement('p')
      p.innerHTML = 'Necessário conter 3 letras ou mais'

      const div = document.querySelector('.nome')

      const existeP = div.querySelector('p')

      if (existeP) {
         existeP.remove()
      }

      div.append(p)
   } else {
      const existeP = document.querySelector('p');
      if (existeP) {
         existeP.remove();
      }
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   if (email === '' || !emailRegex.test(email)) {
      const p = document.createElement('p')
      p.innerHTML = 'Formato de E-mail inválido'

      const div = document.querySelector('.email')

      const existeP = div.querySelector('p')

      if (existeP) {
         existeP.remove()
      }

      div.append(p)
   } else {
      const existeP = document.querySelector('p');
      if (existeP) {
         existeP.remove();
      }
   }

   const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/

   if (cpf === '' || !cpfRegex.test(cpf)) {
      const p = document.createElement('p')
      p.innerHTML = 'Formato de CPF inválido'

      const div = document.querySelector('.cpf')

      const existeP = div.querySelector('p')

      if (existeP) {
         existeP.remove()
      }

      div.append(p)
   } else {
      const existeP = document.querySelector('p');
      if (existeP) {
         existeP.remove();
      }
   }

   if (address === '') {
      const p = document.createElement('p')
      p.innerHTML = 'Informe o endereço'

      const div = document.querySelector('.addresss')

      const existeP = div.querySelector('p')

      if (existeP) {
         existeP.remove()
      }

      div.append(p)
   } else {
      const existeP = document.querySelector('p');
      if (existeP) {
         existeP.remove();
      }
   }

   if (houseNumber === '') {
      const p = document.createElement('p')
      p.innerHTML = 'Informe o número da residência'

      const div = document.querySelector('.number')

      const existeP = div.querySelector('p')

      if (existeP) {
         existeP.remove()
      }

      div.append(p)
   } else {
      const existeP = document.querySelector('p');
      if (existeP) {
         existeP.remove();
      }
   }

   
   if (nome !== '' && nome.length > 3 && email !== '' && emailRegex.test(email) && cpf !== '' || cpfRegex.test(cpf) && address !== '' && houseNumber !== '') {
      localStorage.setItem('name', nome)
      localStorage.setItem('email', email)
      localStorage.setItem('cpf', cpf)
      localStorage.setItem('address', address)
      localStorage.setItem('houseNumber', houseNumber)
      localStorage.setItem('coplemento', complemento)
      location.href = '../pages/home.html'
   }
})
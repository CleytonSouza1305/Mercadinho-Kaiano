const person = localStorage.getItem('name')
const user = document.getElementById('person')

user.innerHTML = person

const email = localStorage.getItem('email')
const cpf = localStorage.getItem('cpf')

const registerBtn = document.getElementById('register-button')

const products = []

function cadastrarProduct(img, productName, price, pedoProduct) {
   const produtos = {
      picture: img,
      nome: productName,
      price: price,
      peso: pedoProduct
   }

   products.push(produtos)
}

function atualizarListaProdutos() {
   const container = document.getElementById('container-products');
   container.innerHTML = '';

   for (let i = 0; i < products.length; i++) {
      const card = document.createElement('div');
      card.className = 'card';

      const picture = document.createElement('img');
      picture.className = 'img-product'
      picture.src = products[i].picture;

      const nome = document.createElement('h3');
      nome.classList = 'product-name'
      nome.innerHTML = products[i].nome;

      const detailsDiv = document.createElement('div')
      detailsDiv.classList = 'details'

      const price = document.createElement('span');
      price.classList = 'product-price'
      price.innerHTML = 'Preço: R$' + products[i].price;

      const peso = document.createElement('span')
      peso.classList = 'peso'
      peso.innerHTML = 'Peso: ' + products[i].peso

      detailsDiv.append(price, '|', peso)

      const quantidadeDiv = document.createElement('div')
      quantidadeDiv.className = 'quantidade-group'

      const menos = document.createElement('span')
      menos.className = 'menos'
      const iMenos = document.createElement('i')
      iMenos.className = `fas fa-minus`
      menos.append(iMenos)

      const mais = document.createElement('span')
      mais.className = 'mais'
      const iMais = document.createElement('i')
      iMais.className = `fa-solid fa-plus`
      mais.append(iMais)

      const number = document.createElement('span')
      number.className = 'number'
      number.innerText = '0'

      quantidadeDiv.append(menos, number, mais) 

      const cartDiv = document.createElement('div')
      cartDiv.className = 'cart-div'
      const btnCart = document.createElement('button')
      btnCart.type = 'button'
      btnCart.id = 'cart-btn'
      const addToCart = document.createElement('i')
      addToCart.classList = 'fa-solid fa-plus'
      btnCart.append(addToCart)
      cartDiv.append(btnCart)

      card.append(picture, nome, detailsDiv, quantidadeDiv, cartDiv);
      container.append(card);
   }
}

function modal() {
   const modal = document.querySelector('.modal')
   modal.classList.remove('display')

   const backBtn = document.querySelector('.back').addEventListener('click', function() {
      modal.classList.add('display')
   })
}

if (person === 'Cleyton de Jesus Conceição Souza' && email === 'bigcleyton@gmail.com' && cpf === '494.043.608-05') {
   registerBtn.addEventListener('click', modal)
   const creatProduct = document.getElementById('creat-button')
   creatProduct.addEventListener('click', function() {
      const modal = document.querySelector('.modal')
      modal.classList.remove('display')

      const productName = document.getElementById('name-product').value
      const url = document.getElementById('urlImage').value
      const preco = document.getElementById('price-product').value
      const peso = document.getElementById('peso-product').value
      
      cadastrarProduct(url, productName, preco, peso)
      atualizarListaProdutos()

      modal.classList.add('display')
   })
   console.log(products)
} else {
   registerBtn.classList.add('display')
}
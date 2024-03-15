const person = localStorage.getItem('name')
const user = document.getElementById('person')

user.innerHTML = person

const email = localStorage.getItem('email')
const cpf = localStorage.getItem('cpf')

const registerBtn = document.getElementById('register-button')

const products = [
   {picture: 'https://img.freepik.com/fotos-gratis/uvas-suculentas-em-uma-videira-um-sabor-refrescante-da-natureza-gerado-pela-inteligencia-artificial_25030-63003.jpg', nome: 'Uva', price: '20,00', peso: '500g'},

   {picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNmhPqa0vtypbOkWQCZ1dtWPec3Ay_V1HhA&usqp=CAU', nome: 'Melancia', price: '45,00', peso: '5Kg'},

   {picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1HQ8EGuqCApTNARzi8wm9N_mXhAK6BQSgQ&usqp=CAU', nome: 'Laranja', price: '19,99', peso: '2Kg'},

   {picture: 'https://noticiasconcursos.com.br/wp-content/uploads/2022/02/noticiasconcursos.com.br-como-escolher-banana-no-mercado-conheca-os-tipos-dicas-para-escolher-banana-no-mercado-reproducao-canva.jpg', nome: 'Banana', price: '11,99', peso: '500g'},

   {picture: 'https://cdn.noticiasagricolas.com.br/dbimagens/thumbs/1200x600-ar/7fccc1de0ff9803eae05c77f6d2536ca.jpg', nome: 'Manga', price: '4,99', peso: '1Kg'},

   {picture: 'https://noticiasconcursos.com.br/wp-content/uploads/2022/03/noticiasconcursos.com.br-como-escolher-kiwi-no-mercado-saiba-como-escolher-e-onde-usar-a-fruta-como-escolher-kiwi-no-mercado-saiba-como-escolher-e-onde-usar-a-fruta-reproducao-canva.jpg', nome: 'Kiwi', price: '6,99', peso: '500g'},

   {picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbC1KukdEZUSWBHVz_GXrpjHT4qsyi7wJ8GQ&usqp=CAU', nome: 'Morango', price: '09,99', peso: '450g'},

   {picture: 'https://www.hfbrasil.org.br/upload/galeria/thumbnail/0800829001584127068.jpg', nome: 'Mamão', price: '11,99', peso: '1Kg'}

] 

function atualizarListaProdutos() {
   const container = document.getElementById('container-products');
   container.innerHTML = '';

   for (let i = 0; i < products.length; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = 'card-' + products[i].nome

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

      detailsDiv.append(price, ' | ', peso)

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
      btnCart.className = 'card-' + products[i].nome
      const addToCart = document.createElement('i')
      addToCart.classList = 'fa-solid fa-plus'
      btnCart.append(addToCart)
      cartDiv.append(btnCart)

      card.append(picture, nome, detailsDiv, quantidadeDiv, cartDiv);
      container.append(card);
   }
}

   console.log(products)
   atualizarListaProdutos()
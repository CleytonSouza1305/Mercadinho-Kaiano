const person = localStorage.getItem('name')
const user = document.getElementById('person')

user.innerHTML = person

const email = localStorage.getItem('email')
const cpf = localStorage.getItem('cpf')

const registerBtn = document.getElementById('register-button')

const products = [
   {picture: '../img/img-fruits/maca-gala.jpg', nome: 'Maça Gala', price: '6,99', peso: '1kg'},

   {picture: '../img/img-fruits/maca-fuji.jpg', nome: 'Maça Fuji', price: '8,99', peso: '1kg'},

   {picture: '../img/img-fruits/maca-verde.jpg', nome: 'Maça Verde', price: '7,99', peso: '1Kg'},

   {picture: '../img/img-fruits/laranja-pera.jpg', nome: 'Laranja Pera', price: '3,99', peso: '2Kg'},

   {picture: '../img/img-fruits/laranja-lima.jpg', nome: 'Laranja Lima', price: '11,99', peso: '1Kg'},

   {picture: '../img/img-fruits/laranja-da-terra.webp', nome: 'Laranja da Terra', price: '9.99', peso: '1kg'},

   {picture: '../img/img-fruits/mexerica.jpg', nome: 'Mexerica', price: '8,88', peso: '1Kg'},

   {picture: '../img/img-fruits/pera-europeia.webp', nome: 'Pêra Européia', price: '18,99', peso: '1Kg'},

   {picture: '../img/img-fruits/pera-asiatica.webp', nome: 'Pêra Asiática', price: '29,99', peso: '1Kg'},

   {picture: '../img/img-fruits/pessego.jpg', nome: 'Pêssego', price: '22,99', peso: '1Kg'},

   {picture: '../img/img-fruits/uva-crimson.webp', nome: 'Uva Crimson', price: '29,99', peso: '800g'},

   {picture: 'https://img.freepik.com/fotos-gratis/uvas-suculentas-em-uma-videira-um-sabor-refrescante-da-natureza-gerado-pela-inteligencia-artificial_25030-63003.jpg', nome: 'Uva Vermelha', price: '20,00', peso: '500g'},

   {picture: 'https://static.ndmais.com.br/2024/03/istock-1495108380.jpg', nome: 'Melancia', price: '54,99', peso: '15Kg'},

   {picture: 'https://ceagesp.gov.br/wp-content/uploads/2015/12/melao_amarelo-600x469.jpg', nome: 'Melão Amarelo', price: '8,99', peso: '1Kg'},

   {picture: 'https://www.hfbrasil.org.br/upload/galeria/0934850001607699112.jpg', nome: 'Melão Gália', price: '9,99', peso: '1Kg'},

   {picture: 'https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/05/beneficios-do-abacaxi-2.jpg', nome: 'Abacaxi', price: '11,99', peso: '1Kg'},

   {picture: 'https://noticiasconcursos.com.br/wp-content/uploads/2022/02/noticiasconcursos.com.br-como-escolher-banana-no-mercado-conheca-os-tipos-dicas-para-escolher-banana-no-mercado-reproducao-canva.jpg', nome: 'Banana Prata', price: '6,99', peso: '500g'},

   {picture: 'https://cdn.fruta.com.br/wp-content/uploads/2019/10/sh_banana-nanica_1528942169-1.jpg', nome: 'Banana Nanica', price: '9,90', peso: '1Kg'},

   {picture: 'https://static.tuasaude.com/media/article/xb/cz/banana-da-terra_61080_l.jpg', nome: 'Banana da Terra', price: '10,99', peso: '1Kg'},
   
   {picture: 'https://s5.static.brasilescola.uol.com.br/be/2023/10/interior-mamao.jpg', nome: 'Mamão', price: '17,99', peso: '1,5kg'},

   {picture: 'https://boomi.b-cdn.net/wp-content/uploads/2022/02/Carambola-faz-mal-a-saude-Veja-beneficios-e-contraindicacoes.png', nome: 'Carambola', price: '14,49', peso: '1Kg'},

   {picture: 'https://euorganico.eco.br/cdn/shop/products/limao-taiti.jpg?v=1639422284', nome: 'Limão Taiti', price: '5,99', peso: '1Kg'},

   {picture: 'https://images.tcdn.com.br/img/img_prod/1017342/mudas_de_limao_siciliano_49_1_5f376a7f0516d0f0d25aebc147053ff6.jpg', nome: 'Limão Siciliano', price: '29,98', peso: '1Kg'},

   {picture: 'https://2.bp.blogspot.com/-i79M7FLOuws/WQY-tXJPsfI/AAAAAAAAW7Y/McyWvHyvX-YETBuCrAyrcrE4N0Icr6bGwCLcB/s1600/Limao%2Bcravo%2Bsanguineo%2Bcitrus%2Blimonia%2Bmudas%2B2.jpg', nome: 'Limão Cravo', price: '9,79', peso: '500g'},

   {picture: 'https://www.mahta.bio/cdn/shop/files/Rectangle_39961_bbdb95d7-2681-4060-b5ef-28f857692540.png?v=1683395104&width=1717', nome: 'Coco Seco', price: '4,99', peso: '1Kg'},

   {picture: 'https://noticiasconcursos.com.br/wp-content/uploads/2022/03/noticiasconcursos.com.br-como-escolher-kiwi-no-mercado-saiba-como-escolher-e-onde-usar-a-fruta-como-escolher-kiwi-no-mercado-saiba-como-escolher-e-onde-usar-a-fruta-reproducao-canva.jpg', nome: 'Kiwi', price: '13,99', peso: '500g'},

   {picture: 'https://nutritotal.com.br/publico-geral/wp-content/uploads/2020/02/shutterstock_385801849.jpg', nome: 'Manga', price: '4,19', peso: '500g'},

   {picture: 'https://conteudo.imguol.com.br/c/entretenimento/78/2018/02/28/morango-1519823853148_v2_4x3.jpg', nome: 'Morango', price: '16, 50', peso: '300g'},

   {picture: '', nome: '', price: '', peso: ''},

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
      price.id = products[i].price

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
      btnCart.className = 'cart-buy'
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
   
   const cartAbrir = document.querySelector('.fa-cart-shopping').addEventListener('click', function() {
      const cart = document.querySelector('.carrinho')
      cart.classList.toggle('opened')
   })
   

   document.querySelectorAll('.mais').forEach(function(moreBtn) {
     moreBtn.addEventListener('click', function() {
      const number = moreBtn.parentElement.querySelector('.number')
      number.innerHTML ++
     })
   })

   document.querySelectorAll('.menos').forEach(function(menosBtn) {
      menosBtn.addEventListener('click', function() {
       const number = menosBtn.parentElement.querySelector('.number')
       if (number.innerHTML === '0') {
         number.innerHTML === '0'
       } else {
         number.innerHTML --
       }
      })
    })

   document.querySelectorAll('.cart-buy').forEach(function (buyButton) {
      buyButton.addEventListener('click', function() {
         
         const card = buyButton.closest('.card')
         const quantidadesss = parseFloat(card.querySelector('.number').textContent)
         const priceString = card.querySelector('.product-price').textContent;
         const price = parseFloat(priceString.replace('Preço: R$', '').replace(',', '.'))

        if (quantidadesss > 0) {
         const vazioEl = document.querySelector('.vazio-div')
         vazioEl.style.display = 'none'

         const cart = document.querySelector('.carrinho')
         cart.classList.add('opened')

         const nameh3 = card.querySelector('h3').textContent
         const img = card.querySelector('.img-product').src
         const peso = card.querySelector('.peso').textContent

         const idPreco = price
         const quantidade = card.querySelector('.number').textContent

         const carrinhoDiv = document.querySelector('.carrinho')
         const div = document.createElement('div')
         const divdad = document.createElement('div')
         const firstcontainer = document.createElement('div')
         firstcontainer.className = 'first-container'
         divdad.className = 'div-dad'

         const imageElement = document.createElement('img')
         imageElement.className = 'cart-img'
         imageElement.src = img

         const h3 = document.createElement('h3')
         h3.className = 'cart-name'
         h3.innerHTML = nameh3

         const divSecondDad = document.createElement('div')

         const preco = document.createElement('h4')
         preco.className = 'quantidade-price'
         const quantidadeEl = document.createElement('h4')
         quantidadeEl.className = 'quantidade-item'

         const totalPrice = idPreco * quantidadesss
         preco.innerHTML = 'R$' + totalPrice

         const deleteItem = document.createElement('i')
         deleteItem.className = "fa-solid fa-trash lixeira"

         divSecondDad.className = 'second-dad'
         divSecondDad.append(preco, deleteItem)

         quantidadeEl.innerHTML = quantidade

         firstcontainer.append(h3, peso, quantidadeEl)

         divdad.append(imageElement, firstcontainer, divSecondDad)
         div.append(divdad)
         carrinhoDiv.append(div)

         let totalItens = 0
         let precoFinal = 0

         document.querySelectorAll('.quantidade-item').forEach(function(el) {
          
            totalItens += parseFloat(el.textContent)
            const itens = document.getElementById('itens')
            itens.innerHTML = totalItens
         })

         document.querySelectorAll('.quantidade-price').forEach(function(el) {
            const precoString = el.textContent.replace('R$', '')
            const price = parseFloat(precoString)
            precoFinal += price
         }) 

         precoFinal = parseFloat(precoFinal.toFixed(2))
         const prices = document.getElementById('total-price')
         prices.innerHTML = precoFinal

         document.querySelectorAll('.lixeira').forEach(function(el) {
            el.addEventListener('click', function() {
               const divDad = el.closest('.div-dad')
               divDad.remove()

               let totalItens = 0
               let precoFinal = 0
      
               document.querySelectorAll('.quantidade-item').forEach(function(el) {
                
                  totalItens += parseFloat(el.textContent)
               })

               const itens = document.getElementById('itens')
                  itens.innerHTML = totalItens

                  if (itens.innerHTML === '0') {
                     vazioEl.style.display = 'block'
                  }
      
               document.querySelectorAll('.quantidade-price').forEach(function(el) {
                  const precoString = el.textContent.replace('R$', '')
                  const price = parseFloat(precoString)
                  precoFinal += price
   
               })
               
               precoFinal = parseFloat(precoFinal.toFixed(2))
               const prices = document.getElementById('total-price')
               prices.innerHTML = precoFinal
      
            })
         })
        }
      })

      document.querySelector('.close-cart').addEventListener('click', function() {
         const cart = document.querySelector('.carrinho')
         cart.classList.remove('opened')
      })
   })


 
  
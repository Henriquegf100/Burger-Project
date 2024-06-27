const list = document.querySelector('ul')
const buttonShowall = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterall = document.querySelector('.filter-all')

function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return newValue
}

function showAll(productsArray) {
  let myLi = ''

  productsArray.forEach(product => {
    myLi +=
      `
          <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
          </li>
        `

  })
  list.innerHTML = myLi
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product, //Spread Operator
    price: product.price * 0.9, // 10% de desconto
  }))

  showAll(newPrices)

}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
  <li>
  <p>O valor total dos itens são:  ${formatCurrency(totalValue)}</p>
</li>
`

}

function filterAllItems() {
  const filterJustVega = menuOptions.filter((product) => product.vegan === true)
  showAll(filterJustVega)
}

document.addEventListener("DOMContentLoaded", function(){
document.body.addEventListener("autoplay",playVideo);
function playVideo(){

  const video = document.getElementById('myvideo');
  if(video.playing){

  } else {
    video.play();
  }
}

});

buttonShowall.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterall.addEventListener('click', filterAllItems)
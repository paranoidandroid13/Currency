// import axios from "axios"
// import "./styles.css"

/* <div class='rates'>
  <h2>Средний курс валют в ПриватБанк</div>
  <div class="title">
    <span>Валюта</span>
    <span>Покупка</span>
    <span>Продажа</span>
  </div>
  <div class='item'>
    <span>USD</span>
    <span>27.27</span>
    <span>27.54</span>
  </div>
</div> */

// let aBlock = document.createElement('block').appendChild( document.createElement('b') );

const createRatesHTML = () => {
  const title = document.createElement('div')
  title.setAttribute('class', 'title')



  const curName = document.createElement('span')
  curName.textContent = 'Валюта'
  title.appendChild(curName)

  const buyName = document.createElement('span')
  buyName.textContent = 'Покупка'
  title.appendChild(buyName)

  const soldName = document.createElement('span')
  soldName.textContent = 'Продажа'
  title.appendChild(soldName)

}


  const btn = document.querySelector('button');
  btn.addEventListener('click', function() {

  
  axios('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  .then(({ data }) => {


    const ratesDiv = document.querySelector('#rates')
    ratesDiv.setAttribute('class', 'rates')

    const rates = data.map((rate) => {
      
      return `<div class='item'>
        <span>${rate.ccy}</span>
        <span>${(+rate.buy).toFixed(2)}</span>
        <span>${(+rate.sale).toFixed(2)}</span>
      </div>`

    })
      ratesDiv.innerHTML = `
        <h2>Средний курс валют в ПриватБанк</h2> 
        <div class="title">
          <span>Валюта</span>
          <span>Покупка</span>
          <span>Продажа</span>
        </div>
        ${rates.join('')}`

  })
})



// Object {ccy: "USD", base_ccy: "UAH", buy: "27.20000", sale: "27.63000"}


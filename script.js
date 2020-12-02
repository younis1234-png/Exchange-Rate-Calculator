// Json array example, making a request to our itm.json
// function calculate(){
// // using fetch, and were making a get request
// fetch("item.json").then((res) => res.json())
// .then((data) => console.log(data))

// }
// calculate()


    
const currencyEl_one = document.getElementById("currency-one")
const currencyEl_two = document.getElementById("currency-two")
const amountEl_one = document.getElementById("amount-one")
const amountEl_two = document.getElementById("amount-two")

const rateEl = document.getElementById("rate")
const swap = document.getElementById("swap")



// fetch exchange rate and update the dom
function calculate(){
// get the values of the our box
const currency_one = currencyEl_one.value
const currency_two = currencyEl_two.value

fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
.then(res => res.json())
.then((data) => {
  // console.log(data)
  // get the rates and get the value of our second currency in a variable 
const rate = data.rates[currency_two]
// console.log(rate)

// update the value for each 1 dollar usd
rateEl.innerText= `1 ${currency_one} = ${rate} ${currency_two}`

amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
})
}

// Event Lisnters
currencyEl_one.addEventListener("change", calculate)
amountEl_one.addEventListener("input", calculate)
currencyEl_two.addEventListener("change", calculate)
amountEl_two.addEventListener("input", calculate)

swap.addEventListener("click", () => {
  
  const temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value = temp
  calculate()
})


calculate()

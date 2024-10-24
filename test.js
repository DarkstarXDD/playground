const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const orderId = 0
const orderQueue = []

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj)
  console.log("New Pizza Added!")
}

console.log(menu)

addNewPizza({ name: "Sausage Delight", price: 6 })

console.log(menu)

function placeOrder(pizzaName) {
  const newOrder = { name: pizzaName, status: "ordered" }
}

function onRemove(id) {
  removeFromCart(id)
}

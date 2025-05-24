const cartItemsDiv = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cart = getFromStorage("cart");
let total = 0;

cartItemsDiv.innerHTML = "";
cart.forEach((item, index) => {
  total += item.price;
  cartItemsDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
});
totalPriceEl.innerText = `Total: $${total}`;

function checkout() {
  const order = {
    id: Date.now(),
    items: cart,
    total
  };
  const orders = getFromStorage("orders");
  orders.push(order);
  saveToStorage("orders", orders);
  saveToStorage("latestOrder", order);
  localStorage.removeItem("cart");
  window.location.href = "D:\Rahma\final project 2\thankyou/thankyou.html";
}

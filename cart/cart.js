const cartItemsDiv = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cart = getFromStorage("cart") || {};
const products = getFromStorage("products") || [];

let total = 0;
cartItemsDiv.innerHTML = "";

Object.entries(cart).forEach(([id, quantity]) => {
  const product = products.find(p => p.id == id);
  if (product) {
    const subtotal = product.price * quantity;
    total += subtotal;
    cartItemsDiv.innerHTML += `<p>${product.title} - $${product.price} × ${quantity} = $${subtotal.toFixed(2)}</p>`;
  }
});

totalPriceEl.innerText = `Total: $${total.toFixed(2)}`;

function checkout() {
  const order = {
    id: Date.now(),
    items: cart,
    total
  };
  const orders = getFromStorage("orders") || [];
  orders.push(order);
  saveToStorage("orders", orders);
  saveToStorage("latestOrder", order);
  localStorage.removeItem("cart");
  window.location.href =".. /hankyou/thankyou.html";
}

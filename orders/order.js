const orders = getFromStorage("orders") || [];
const products = getFromStorage("products") || [];
const container = document.getElementById("ordersContainer");

if (orders.length === 0) {
  container.innerHTML = "<p>No past orders found.</p>";
} else {
  orders.forEach(order => {
    const itemsHtml = Object.entries(order.items).map(([id, qty]) => {
      const product = products.find(p => p.id == id);
      if (!product) return `<li>Unknown product (ID: ${id}) x ${qty}</li>`;
      return `<li>${product.title} - $${product.price} x ${qty}</li>`;
    }).join("");

    const card = document.createElement("div");
    card.className = "order-card";
    card.innerHTML = `
      <h3>Order ID: ${order.id}</h3>
      <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
      <p><strong>Items:</strong></p>
      <ul>${itemsHtml}</ul>
    `;
    container.appendChild(card);
  });
}

// log out
const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (user) {
  const link = document.getElementById("authLink");
  link.innerText = "Logout";
  link.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../auth/auth.html";
  });
}

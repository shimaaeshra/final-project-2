// admin
const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user || !user.isAdmin) {
  alert("Access denied. Admins only.");
  window.location.href = "../home/home.html";
}

// storage
const products = getFromStorage("products") || [];
const orders = getFromStorage("orders") || [];
const users = getFromStorage("users") || [];

// updateMetrics
function updateMetrics() {
  document.getElementById("productCount").innerText = products.length;
  document.getElementById("orderCount").innerText = orders.length;
  const totalSales = orders.reduce((sum, o) => sum + o.total, 0);
  document.getElementById("totalSales").innerText = totalSales.toFixed(2);
  document.getElementById("activeUsers").innerText = users.length;
}

// renderProductTable
function renderProductTable() {
  const table = document.createElement("table");
  table.innerHTML = `<tr><th>Title</th><th>Price</th><th>Actions</th></tr>`;

  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.title}</td>
      <td>$${product.price}</td>
      <td><button onclick="deleteProduct(${index})">Delete</button></td>
    `;
    table.appendChild(row);
  });

  document.getElementById("productTable").innerHTML = "";
  document.getElementById("productTable").appendChild(table);
}

//deleteProduct
function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    saveToStorage("products", products);
    renderProductTable();
    updateMetrics();
  }
}

//renderOrder
function renderOrderTable() {
  const table = document.createElement("table");
  table.innerHTML = `<tr><th>Order ID</th><th>Total</th><th>Items</th></tr>`;

}
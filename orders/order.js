const orders = getAllOrders();
    const container = document.getElementById("ordersContainer");

    if (orders.length === 0) {
      container.innerHTML = "<p>No past orders found.</p>";
    } else {
      orders.forEach(order => {
        const card = document.createElement("div");
        card.className = "order-card";
        card.innerHTML = `
          <h3>Order ID: ${order.id}</h3>
          <p><strong>Date:</strong> ${order.date}</p>
          <p><strong>Total:</strong> $${order.total}</p>
          <p><strong>Items:</strong></p>
          <ul>${order.items.map(item => `<li>${item.name} - $${item.price}</li>`).join("")}</ul>
        `;
        container.appendChild(card);
      });
    }

    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      document.getElementById("authLink").innerText = "Logout";
      document.getElementById("authLink").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "D:/Rahma/final project 2//auth/auth.html";
      });
      }
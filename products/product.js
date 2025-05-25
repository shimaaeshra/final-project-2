//loading

document.getElementById('allProducts').innerHTML = "<p>Loading...</p>";

// get all data
async function getAllProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();

        localStorage.setItem("products", JSON.stringify(products));
        display(products);
        populateCategoryFilter(products); 
    // add category
        ; } catch (error) {
        document.getElementById('allProducts').innerHTML = "<p> fail to loading </p>";
        console.error("Error fetching products:", error);
    }
}


// display
function display(products) {
  let temp = "";
  products.forEach(element => {
    temp += `
      <div id="${element.id}" class="product-card">
        <img src="${element.image}" alt="${element.title}" onerror="this.src='https://via.placeholder.com/100'">
        <h2>${element.title}</h2>
        <span>$${element.price}</span>
        <button onclick="getDetails(${element.id})">View Details</button>
        <button onclick="addToCart(${element.id})">Add to Cart</button>
      </div>
    `;
  });
  document.getElementById('allProducts').innerHTML = temp;
}

// filterByCategory
function filterByCategory(category) {
    const all = JSON.parse(localStorage.getItem("products")) || [];
    if (category === "all") {
        display(all);
    } else {
        const filtered = all.filter(p => p.category === category);
        display(filtered);
    }
}
// populateCategoryFilter
function populateCategoryFilter(products) {
    const categories = ["all", ...new Set(products.map(p => p.category))];
    const select = document.getElementById("categoryFilter");
    select.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join("");
    select.onchange = () => filterByCategory(select.value);
}

// product details
function getDetails(id) {
    localStorage.setItem('productId', id);
    window.location.href = "../products/productDetails.html"; 
}

// add to cart
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    cart[id] = (cart[id] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
     alert("add to cart")
}
getAllProducts()
// auth.js
//veryfication tool
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
//registration
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = {
    username: regUsername.value,
    email: regEmail.value,
    password: regPassword.value,
    isAdmin: false
  };
  const users = getFromStorage("users");
  users.push(user);
  saveToStorage("users", users);
  alert("User registered successfully!");
});
//log in
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  const users = getFromStorage("users");
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    saveToStorage("loggedInUser", user);
    alert("Login successful!");
    window.location.href = "D:/final project 2/products/product.html";
  } else {
    alert("Invalid credentials");
  }
});
const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (user) {
    document.getElementById("authLink").innerText = "Logout";
    document.getElementById("authLink").addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "D:/final project 2/auth/auth.html";
    });
  }

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}
const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (user) {
  document.getElementById("authLink").innerText = "Logout";
  document.getElementById("authLink").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../auth/auth.html";
  });
}

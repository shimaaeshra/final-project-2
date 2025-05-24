const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      document.getElementById("authLink").innerText = "Logout";
      document.getElementById("authLink").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "D:\Rahma\final project 2\auth/auth.html";
      });
    }
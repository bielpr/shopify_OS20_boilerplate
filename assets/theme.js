// theme.js - General script for Shopify theme enhancements

document.addEventListener("DOMContentLoaded", function() {
  console.log("Theme scripts loaded successfully.");

  // Dynamic Cart Count Update
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    fetch('/cart.js')
      .then(response => response.json())
      .then(data => {
        cartCountElement.textContent = data.item_count;
      })
      .catch(error => console.error("Error fetching cart data:", error));
  }

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
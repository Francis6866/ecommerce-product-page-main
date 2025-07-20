document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.querySelector('.product__button');
    const qtyDisplay = document.querySelector('.product__qty-value');
    const cartBadge = document.getElementById('cart-badge');
  
    // Function to get cart from localStorage
    function getCart() {
      return JSON.parse(localStorage.getItem('cart')) || [];
    }
  
    // Function to update badge
    function updateCartBadge() {
      const cart = getCart();
    //   const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalQty = cart.length;
      if (totalQty > 0) {
        cartBadge.style.display = 'inline-block';
        cartBadge.textContent = totalQty;
      } else {
        cartBadge.style.display = 'none';
      }
    }
  
    // Function to save cart
    function saveCart(cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartBadge();
    }
  
    // Get product info
    function getCurrentProduct() {
    //   const title = document.querySelector('.product__title').textContent;
      const image = document.querySelector('.product__image-main img').src;
      const quantity = parseInt(qtyDisplay.textContent);
      return { image, quantity };
      //   const thumbnail = document.querySelector('.product__thumbnail img').src;
    }
  
    // Add to cart logic
    addToCartBtn.addEventListener('click', () => {
      const product = getCurrentProduct();
      if (product.quantity === 0) {
        alert("Please select at least one item.");
        return;
      }
  
      let cart = getCart();
      const existingIndex = cart.findIndex(item => item.image === product.image);
  
      if (existingIndex > -1) {
        const confirmUpdate = confirm("This item is already in your cart. Do you want to increase the quantity?");
        if (confirmUpdate) {
          cart[existingIndex].quantity += product.quantity;
          saveCart(cart);
          alert("Cart updated!");
        }
      } else {
        cart.push(product);
        saveCart(cart);
        alert("Item added to cart!");
      }
    });
  
    // Initialize badge on page load
    updateCartBadge();
  });
  
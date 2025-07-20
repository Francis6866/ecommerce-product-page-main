  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function () {

    // === Thumbnail Click Functionality ===
    const mainImage = document.querySelector('.product__image-main img');
    const thumbnails = document.querySelectorAll('.product__thumbnail img');

    // add the active class to the first image onload
    thumbnails.forEach(thumbnail => {
        if(thumbnail.alt === `Thumbnail 1`){
            thumbnail.classList.add('active');
        }
    })

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        // Replace main image source with the clicked thumbnail
        mainImage.src = thumbnail.src.replace('-thumbnail', '');
        // Optional: highlight active thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
      });
    });

    // previous and next images functionality
    const productImages = [
        'image-product-1.jpg',
        'image-product-2.jpg',
        'image-product-3.jpg',
        'image-product-4.jpg'
      ];
      
      let currentImageIndex = 0;

    const btnPrev = document.querySelector('.product__btn-previous');
    const btnNext = document.querySelector('.product__btn-next');

    function updateMainImage(index) {
        const newSrc = `./images/${productImages[index]}`;
        mainImage.src = newSrc;
      }
      
      // Go to previous image
      btnPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
        updateMainImage(currentImageIndex);
      });
      
      // Go to next image
      btnNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % productImages.length;
        updateMainImage(currentImageIndex);
      });



    // === Quantity Buttons ===
    const qtyDisplay = document.querySelector('.product__qty-value');
    const btnIncrease = document.querySelector('.product__qty-btn--increase');
    const btnDecrease = document.querySelector('.product__qty-btn--decrease');
    const priceEL = document.querySelector(".product__current-price");
    let quantity = 1;

    btnIncrease.addEventListener('click', () => {
        quantity++;
        let price = quantity === 1 ? '$125.00' : `$${125 * quantity}.00`
        priceEL.textContent = price
        qtyDisplay.textContent = quantity;
    });

    btnDecrease.addEventListener('click', () => {
        // if (quantity < 1) return
      if (quantity > 1) {
        quantity--;
        let price = quantity === 1 ? '$125.00' : `$${125 * quantity}.00`
        priceEL.textContent = price
        qtyDisplay.textContent = quantity;
      }
    });

    // === Add to Cart Button ===
    // const addToCartBtn = document.querySelector('.product__button');

    // addToCartBtn.addEventListener('click', () => {
    //   if (quantity === 0) {
    //     alert('Please add at least one item to your cart.');
    //     return;
    //   }
    //   alert(`${quantity} item(s) added to your cart!`);
    //   // You can extend this to actually update a cart system
    // });
  });

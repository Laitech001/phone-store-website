const productCard = document.querySelector('.js-products');

// FILTER PRODUCTA THAT THE PRICE >= ₦600,000
const iphoneProducts = products.filter(product => {
  return product.brand === 'iphone';
});
console.log(iphoneProducts);

  iphoneProducts.forEach((product) => {
    productCard.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-name">${product.name}</span>

        <div class=" product-specs">
          <p>${product.specs.ram}, ${product.specs.storage}, ${product.specs.size}</p>
        </div>
        
        <p class="product-price">₦${product.price.toLocaleString()}</p>

        <div class="product-rating">
          ⭐⭐⭐⭐⭐ 
          <span>(5.0)</span>
        </div>

        <div class="buttons">

          <a href="#" class="whatsapp-btn js-whatsapp-btn">${product.button.text}</a>

          <button class="add-to-cart-btn js-add-to-cart" data-product-name="${product.name}">Add to Cart</button>
        </div>
        
      </div>
    `
  });

// THE CODE BELOW GENERATE WHATSAPP LINK FOR THE BUY NOW BUTTON.
const buyNowButtons = document.querySelectorAll('.js-whatsapp-btn');

buyNowButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const productName = button.closest('.card').querySelector('.product-name').textContent;
    const productPriceText = button.closest('.card').querySelector('.product-price').textContent;
    const productPrice = parseInt(productPriceText.replace('₦', '').replace(/,/g, ''));

    const phoneNumber = '2347062639160';
    const message = `Hello! I am Interested in the ${productName} for ₦${productPrice.toLocaleString()}`;
    const whatsapplnk = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsapplnk, '_blank');
  });
});
//WHATSAPP LINK CODES ENDED HERE.
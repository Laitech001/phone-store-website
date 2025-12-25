const productCard = document.querySelector('.js-products');
products.forEach((product) => {
  productCard.innerHTML += `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <span class="product-name">${product.name}</span>

      <div class=" product-specs">
        <p>${product.specs.ram}, ${product.specs.storage}, ${product.specs.size}</p>
      </div>
      
      <p class="product-price">${product.price}</p>

      <div class="product-rating">
        ⭐⭐⭐⭐⭐ 
        <span>(5.0)</span>
      </div>

      <div class="buttons">

        <a href="#" onclick="${product.button.onclick}" class="whatsapp-btn">${product.button.text}</a>

        <button class="add-to-cart-btn js-add-to-cart" data-product-name="${product.name}">Add to Cart</button>
      </div>
      
    </div>
  `
});


// THE CODES BELOW GENERATE WHATSAPP LINK FOR THE BUY NOW BUTTON.
const phoneNumber = '2347062639160';

function whatsappLink(productName, productPrice) {
  const message = `Hello! I am Interested in the ${productName} for ${productPrice}`;
  const whatsapplnk = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsapplnk, '_blank');
}
//WHATSAPP LINK CODES ENDED HERE.

// ADD TO CART FUNCTIONALITY
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product-name');

      const existingItem = cart.find(item => item.productName === productName);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
        productName: productName,
        quantity: 1
      },);
      }

      updateCartCount();
      console.log(cart);
    });
  });

  // CODES TO UPDATE CART ITEM COUNT IN THE NAVBAR
  function updateCartCount() {
    const cartBadge = document.querySelector('.js-cart-quantity');
    const totalItems = cart.reduce((total, item) => total += item.quantity, 0);
    cartBadge.textContent = totalItems;
  }

const productCard = document.querySelector('.js-products');
const page = document.body.dataset.page;
function renderProduct(productList, productCard) {
  productCard.innerHTML = "";

  productList.forEach((product) => {
    productCard.innerHTML += `
      <div class="card" data-product-id="${product.id}">
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
  })
}

if (page === 'homepage'){
 const hotdeals = products.filter(p => p.price >= 600000);
 renderProduct(hotdeals, productCard);
} else if (page === 'iphone') {
  const iphoneProducts = products.filter(p => p.brand === 'iphone');
  renderProduct(iphoneProducts, productCard);
} else if (page === 'samsung') {
  const samsungProducts = products.filter(p => p.brand === 'samsung');
  renderProduct(samsungProducts, productCard);
}

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

// PASSING PRODUCT DETAIL TO PRODUCT DETAILS PAGE BY PRODUCTid

  const allProduct = document.querySelectorAll('.card');

  allProduct.forEach((card) => {
    card.addEventListener('click', () => {
      const productId = card.dataset.productId;
      console.log(productId);
    
    window.location.href=`product-details.html?id=${productId}`;
    });
  });

// END OF THE PRODUCT DETAIL FUNCTIONALITY CODE

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

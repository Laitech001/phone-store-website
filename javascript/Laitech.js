// MENU ICON SHOWS MOBILE NAVIGATION
const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBar.classList.toggle('open');
})
// CODE END FOR MENU ICON

const productCard = document.querySelector('.js-products');
const page = document.body.dataset.page;

function renderProduct(productList, productCard) {
  productCard.innerHTML = "";

  productList.forEach((product) => {
    productCard.innerHTML += `
      <div class="card">
        ${product.isHotDeal ? '<span  class="hot-deal-badge">Hot deal</span>' : ''}
        ${product.isFeatured ? '<span     class="featured-badge">Featured</span>' : ''}
        <div class="clickable-card-area" data-product-id="${product.id}">
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
        </div>

        <div class="buttons">

          <a href="#" class="whatsapp-btn js-whatsapp-btn">${product.button.text}</a>

          <button class="add-to-cart-btn js-add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `
  });
}

// safe out of stock message in a variable
const outOfStockMessage = document.querySelector('.out-of-stock-message');

// function that checks stock status and displays message
function checkStockStatus(list) {
  if (list.length === 0) {
    productCard.innerHTML = '';
    outOfStockMessage.style.display = 'block';
  } else {
    outOfStockMessage.style.display = 'none';
    renderProduct(list, productCard);
  }
}

if (page === 'homepage'){
 const hotdeals = products.filter(p => p.price >= 600000);
 checkStockStatus(hotdeals);
} else if (page === 'iphone') {
  const iphoneProducts = products.filter(p => p.brand === 'iphone');
  checkStockStatus(iphoneProducts);
} else if (page === 'samsung') {
  const samsungProducts = products.filter(p => p.brand === 'samsung');
  checkStockStatus(samsungProducts);
} else if (page === 'tecno') {
  const tecnoProducts = products.filter(p => p.brand === 'tecno');
  checkStockStatus(tecnoProducts);
} else if (page === 'infinix') {
  const infinixProducts = products.filter(p => p.brand === 'infinix');
  checkStockStatus(infinixProducts);
}

// wrapped all render and attach function in a single function
function renderAndAttach(productsToRender) {
  renderProduct(productsToRender, productCard);
  attachBuyNowEvent();
  attachAddToCartEvent();
}

// THE CODE BELOW GENERATE WHATSAPP LINK FOR THE BUY NOW BUTTON.
const buyNowButtons = document.querySelectorAll('.js-whatsapp-btn');

function attachBuyNowEvent() {
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
}
attachBuyNowEvent();
//WHATSAPP LINK CODES ENDED HERE.

// THE CODE BELOW ADDED FUNCTIONALITY TO THE SEARCH BAR
const searchInput = document.querySelector('.js-search-bar');
const searchBtn = document.querySelectorAll('.js-search-btn');
const noResultText = document.querySelector('.no-result');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
      renderAndAttach(products)
      noResultText.style.display = 'none';
      return;
    }

    const keywords = query.split(' ').filter(Boolean);

    const filteredProducts = products.filter(product => {
      const name = product.name?.toLowerCase() || '';
      const brand = product.brand?.toLowerCase() || '';

      const searchableText = `${name} ${brand}`;

      return keywords.every(word =>
        searchableText.includes(word)
      );
    });

    renderAndAttach(filteredProducts);

    if (filteredProducts.length === 0) {
      noResultText.style.display = 'block';
    } else {
      noResultText.style.display = 'none';
    }
}

searchBtn.forEach((button) => {
  button.addEventListener('click', performSearch);
  button.addEventListener('touchstart', performSearch, {passive: true});
})

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
// END OF SEARCH BAR FUNCTIONALITY CODE

// PASSING PRODUCT DETAIL TO PRODUCT DETAILS PAGE BY PRODUCTid
  const allProduct = document.querySelectorAll('.clickable-card-area');

  allProduct.forEach((card) => {
    card.addEventListener('click', () => {
      const productId = card.dataset.productId;
      console.log(productId);
    
    window.location.href=`product-details.html?id=${productId}`;
    });
  });

// END OF THE PRODUCT DETAIL FUNCTIONALITY CODE

// LOGIN BUTTON FUNCTIONALITY
const loginButtons = document.querySelectorAll('.login-container');

function handleLoginClick(e) {
  e.preventDefault();
  alert('The Page is not available yet!');
}

loginButtons.forEach(button => {
  button.addEventListener('click', handleLoginClick);
  button.addEventListener('touchstart', handleLoginClick, { passive: true });
});

// ADD TO CART FUNCTIONALITY
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  // check if product already exists in cart
  const item = cart.find(cartItem => cartItem.id === productId);

  if (item) {
    item.qty += 1; // increase quantity
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  //updating the cart quantity on the homepage
  updateCartQuantity();
}

// connect the add to cart button

function attachAddToCartEvent() {
  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      addToCart(button.dataset.id);
    });
  });
}
attachAddToCartEvent();

// homepage cart quantiy update code
let cartQuantity = document.querySelectorAll('.js-cart-quantity');

function updateCartQuantity() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  cartQuantity.forEach((el) => {
    el.textContent = totalQty;
  });
}

updateCartQuantity();

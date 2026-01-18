const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const product = products.find(p => p.id === productId);

const showProductDetails = document.querySelector('.product-page');

if (!product) {
  alert('Product not found');
}

showProductDetails.innerHTML = `
  <section class="image-specs-div">
    <div class="image-container">
      <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-info">
      <h1>Product Specs</h1>        
      <ul class="product-specs">
        <li class="product-name">Product Name: ${product.name}</li>
        <li class="product-price">Price: ₦${product.price.toLocaleString()}</li>
        <li><strong>RAM:</strong> ${product.specs.ram}</li>
        <li><strong>Storage:</strong> ${product.specs.storage}</li>
        <li><strong>Display:</strong> ${product.specs.display}</li>
        <li><strong>Processor:</strong> ${product.specs.processor}</li>
      </ul>

      <div class="action-btn">
        <button class="buy-now-button js-whatsapp-btn">Buy Now</button>
        <button class="add-to-cart-button js-add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  </section>
`;


  if(!product) {
    showProductDetails.innerHTML = `<p>Product not found</p>`;
  }

  const buyNowButtons = document.querySelectorAll('.js-whatsapp-btn');

buyNowButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const phoneNumber = '2347062639160';

    const message = `Hello! I am Interested in the ${product.name} for ₦${product.price.toLocaleString()}`;
    const whatsapplnk = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsapplnk, '_blank');
  });
});

// Add to Cart button functionality;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const addToCartBtn = document.querySelector('.js-add-to-cart-btn');

function addToCart (productId) {
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Product added to cart!');

  updateCartQuantity();
}

addToCartBtn.addEventListener('click', () => {
  addToCart(product.id);
});

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
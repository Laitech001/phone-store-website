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
      <img src="${product.image}" alt="${product.name}" class="product-image">
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
        <button class="buy-now-button">Buy Now</button>
        <button class="add-to-cart-button">Add to Cart</button>
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
    const productName = button.closest('.card').querySelector('.product-name').textContent;
    const productPriceText = button.closest('.card').querySelector('.product-price').textContent;
    const productPrice = parseInt(productPriceText.replace('₦', '').replace(/,/g, ''));

    const phoneNumber = '2347062639160';
    const message = `Hello! I am Interested in the ${productName} for ₦${productPrice.toLocaleString()}`;
    const whatsapplnk = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsapplnk, '_blank');
  });
});
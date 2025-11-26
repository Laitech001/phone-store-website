const productCard = document.querySelector('.js-products');
products.forEach((product) => {
  productCard.innerHTML += `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <span class="product-name">${product.name}</span>
      <p class="description">Apple ${product.name}, ${product.description.ram} with ${product.description.storage}</p>
      <p class="price">${product.price}</p>
      <div class="buttons">

        <a href="#" onclick="${product.button.onclick}" class="whatsapp-btn">${product.button.text}</a>

        <button class="add-to-cart-btn js-add-to-cart">Add to Cart</button>
      </div>
      
    </div>
  `
});


// whatsapp link button js code begin.
const phoneNumber = '2347062639160';

function whatsappLink(productName, productPrice) {
  const message = `Hello! I am Interested in the ${productName} for ${productPrice}`;
  const whatsapplnk = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsapplnk, '_blank');
}
//whatsapp link button js code end.

// Add to cart button js code begin.
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      console.log('Added to cart');
    })
  })


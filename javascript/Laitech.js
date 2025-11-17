const productCard = document.querySelector('.js-products');
products.forEach((product) => {
  productCard.innerHTML += `
    <div class="card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <a href="#" onclick=${product.button.onclick} class="whatsapp-btn">"${product.button.text}"</a>
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


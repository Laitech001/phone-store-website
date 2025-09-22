const phoneNumber = '2347062639160';

function whatsappLink(productName, productPrice) {
  const message = `Hello! I am Interested in the ${productName} for ${productPrice}`;
  const whatsapplnk = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsapplnk, '_blank');
}
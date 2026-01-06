// ====== GET CART FROM LOCALSTORAGE OR EMPTY ======
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.querySelector('.cart-items');

// ====== RENDER CART ======
function renderCart() {
  // 1️⃣ Clear previous cart HTML
  cartContainer.innerHTML = '';

  // 2️⃣ Render each cart item
  cart.forEach(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (!product) return;

    cartContainer.innerHTML += `
      <div class="each-item">
        <section class="item-details">
          <div class="product-img">
            <img src="${product.image}" alt="${product.name}">
            <span>
              ${product.name}
              ${product.specs?.ram ? `, ${product.specs.ram} with ${product.specs.storage}` : ""}
            </span>
          </div>
          <div class="product-price">
            <h1>₦${Number(product.price || 0).toLocaleString()}</h1>
          </div>
        </section>

        <section class="buttons">
          <button class="remove-btn js-remove-btn" data-id="${product.id}">Remove</button>
          <div class="actions-btn">
            <button class="decrease-btn qty-btn" data-id="${product.id}" data-action="decrease">-</button>
            <span class="quantity">${cartItem.qty}</span>
            <button class="increase-btn qty-btn" data-id="${product.id}" data-action="increase">+</button>
          </div>
        </section>
      </div>
    `;
  });

  // 3️⃣ Attach button events after rendering
  attachRemoveEvent();
  attachQuantityEvents();

  // 4️⃣ Update totals every time cart renders
  updateTotalQuantity();
  updateTotalPrice();
}

// ====== REMOVE ITEM ======
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function attachRemoveEvent() {
  document.querySelectorAll('.js-remove-btn').forEach(button => {
    button.addEventListener('click', () => removeFromCart(button.dataset.id));
  });
}

// ====== UPDATE QUANTITY ======
function updateQuantity(productId, action) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  if (action === 'increase') item.qty += 1;
  if (action === 'decrease') item.qty -= 1;

  // Remove item if quantity <= 0
  if (item.qty <= 0) cart = cart.filter(item => item.id !== productId);

  saveCart();
  renderCart();
}

function attachQuantityEvents() {
  document.querySelectorAll('.qty-btn').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.id;
      const action = button.dataset.action;
      updateQuantity(productId, action);
    });
  });
}

// ====== TOTALS ======
function calculateTotalQuantity() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function updateTotalQuantity() {
  document.querySelector('.total-items').innerHTML = `
    <p>Total Items:</p>
    <span class="total-quantity">${calculateTotalQuantity()}</span>
  `;
}

function calculateTotalPrice() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    if (!product) return total;
    return total + product.price * item.qty;
  }, 0);
}

function updateTotalPrice() {
  document.querySelector('.total-price').innerHTML = `
    <p>Total Price:</p>
    <span>₦${calculateTotalPrice().toLocaleString()}</span>
  `;
}

// ====== SAVE CART ======
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ====== INITIAL RENDER ======
renderCart();

// ====== ORDER NOW BUTTON FUNCTIONALITY ======
function orderNow() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  let message = 'Hello, I want to order the following Item:\n\n'

  cart.forEach((item, index) => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    message += `${index + 1}. ${product.name} - Quantity: ${item.qty} - Price: ₦${(product.price * item.qty).toLocaleString()}`
  });

  message += `\nTotal Item: ${calculateTotalPrice()}`;
  message += `\nTotal Item: ₦${calculateTotalPrice().toLocaleString()}`;

  const phoneNumber = '2347062639160';

  // send to whatsapp
  const whatsapplnk = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsapplnk, '_blank');

  // send to email
  const email = "abdulganiyibrahim095@gmail.com";
  const subject = "New Order";
  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.open(mailtoURL, "_blank");
}

document.querySelector('.order-now').addEventListener('click', orderNow);
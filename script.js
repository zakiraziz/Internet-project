let cart = [];
let totalPrice = 0;

function addToCart(button) {
  const product = button.closest('.product');
  const price = parseFloat(product.getAttribute('data-price'));
  const name = product.querySelector('h2').innerText;

  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
  });

  totalPrice = cart.reduce((total, item) => total + item.price, 0);
  document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

function checkout() {
  fetch('/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cart, totalPrice })
  }).then(response => response.json())
    .then(data => {
      alert(data.message);
      cart = [];
      updateCart();
    });
}

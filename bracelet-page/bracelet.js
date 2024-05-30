const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('#close-cart');


cartIcon.onclick = () => {
    cart.classList.add('active');
};
closeCart.onclick = () => {
    
cart.classList.remove('active');
};

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  const removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    const button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  const quantityInputs = document.getElementsByClassName('cart-quantity');
  for (let i = 0; i < quantityInputs.lenght; i++) {
    const input = quantityInputs[i];
    input.addEventListener('change', quantityChange);
  }
  const addCart = document.getElementsByClassName('add-cart');
  for (let i = 0; i < addCart.lenght; i++) {
    const button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }
  document
      .getElementsByClassName('btn-buy')[0]
      .ddEventListener('click', buyButtonclicked);
}

function buyButtonclicked() {
  alert('Your Order is placed');
  const cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

// quantity changes
function removeCartItems(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

// add to cart
function addCartClicked(event) {
  const button = event.target;
  const shopProducts = button.parentElement;
  const title = shopProduct.getElementByClassName('product-title')[0].innerText;
  const price = shopProduct.getElementByClassName('price')[0].innerText;
  const productImg = shopProduct.getElementByClassName('product-img')[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg) {
  const cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  const cartItems = documents.getElementByClassName('cart-content')[0];
  const cartItemsNames = cartItems.getElementByClassName('cart-product-title');
  for (let i = 0; i < cartItemsNames.length; i++) {
    alert('You have already add this item to cart');
    return;
  }
}

const cartBoxContent = `
                    <img src="${productImg}" alt="" class="cart-img">
                    <div class="detail-box">
                         <div class="cart-product-title">${title}</div>
                         <div class="cart-price">${price}</div>
                         <input type="number" value="1" class="cart-quantity">
                    </div>
                    <i class='bx bxs-trash-alt cart-remove' ></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
    .getElementByClassName('cart-remove')[0]
    .addEventListener('click', removeCartItem);
cartShopBox
    .getElementByClassName('cart-quantity')[0]
    .addEventListener('change', quantityChange);

function updatetotal() {
  const cartContent = document.getElementsByClassName('cart-content')[0];
  const cartBoxes = cartContent.getElementsByClassName('cart-box');
  let total = 0;

  for (let i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName('cart-price')[0];
    const quantityElement = cartBox.getElementByClassName('cart-quantity')[0];
    const price = parseFloat(priceElement.innerText.replace('$', ''));

    const quantity = quantityElement.value;
    total += price * quantity;
  }
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName('total-price')[0].innerText = `$${total}`;
}



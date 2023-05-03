const cart = document.getElementById("cart");
const products = document.getElementById("products");

let cartItems = {};
let total = 0;

const storedCartItems = localStorage.getItem("cartItems");
if (storedCartItems) {
  cartItems = JSON.parse(storedCartItems);
  updateCart();
}

products.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);
    addToCart(name, price);
  }
});

cart.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    const name = e.target.dataset.name;
    const itemTotal = cartItems[name].price * cartItems[name].quantity;
    delete cartItems[name];
    total -= itemTotal;
    updateCart();
  }
});

function addToCart(name, price) {
  if (cartItems[name]) {
    cartItems[name].quantity++;
  } else {
    cartItems[name] = {
      price: price,
      quantity: 1,
    };
  }

  total += price;
  updateCart();

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function updateCart() {
  cart.innerHTML = "";

  for (let item in cartItems) {
    const li = document.createElement("li");
    const { price, quantity } = cartItems[item];
    const itemTotal = price * quantity;

    li.innerText = `${item} - ${quantity} x $${price} = $${itemTotal}`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Eliminar";
    removeButton.classList.add("remove-item");
    removeButton.dataset.name = item;
    li.appendChild(removeButton);

    cart.appendChild(li);
  }

  document.getElementById("total").innerText = `$${total}`;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

const productsData = {
  "product1": {
    "name": "Product 1",
    "price": 10
  },
  "product2": {
    "name": "Product 2",
    "price": 20
  },
  "product3": {
    "name": "Product 3",
    "price": 30
  }
};

console.log(productsData);

const conditions = {
  "condition1": true,
  "condition2": false,
  "condition3": true
};

console.log(conditions);

const form = document.getElementById("add-to-cart-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productSelect = document.getElementById("product-select");
  const quantityInput = document.getElementById("quantity-input");

  const name = productSelect.value;
  const price = productsData[name].price;
  const quantity = Number(quantityInput.value);

  addToCart(name, price, quantity);

  productSelect.selectedIndex = 0;
  quantityInput.value = 1;
});

function addToCart(name, price, quantity) {
  if (cartItems[name]) {
    cartItems[name].quantity += quantity;
  } else {
    cartItems[name] = {
      price: price,
      quantity: quantity,
    };
  }

  total += price * quantity;
  updateCart();

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

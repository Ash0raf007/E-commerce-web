let basket = JSON.parse(localStorage.getItem("data")) || [];
let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let calcaulation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calcaulation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket.map((x) => {
      // console.log(x);
      let { id, item } = x;
      let search = data.find((y) => y.id === id) || [];
      return `
            <div class='cart-item'>
                <img width = "100" src=${search.img} alt = ""/>
                <div class='details'>
                    <div class='title-price-x'>
                        <h4 class="title-price">
                        <p>${search.name}</p>
                        <p class ="cart-item-price">$${search.price}</p>
                        </h4>
                        <i onclick="removeItem(${
                          search.id
                        })" class='bi bi-x-lg'></i> 
                    </div>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        <h3>$${item * search.price}</h3>
                    </div>
            </div>
                </div>           
            </div>

            `;
    }));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is empty</h2>
    <a href="./index.html">
    <button class="homeBtn">Back to home</button>
    </a>
    `;
  }
};
generateCartItems();
let increment = (id) => {
  selectedId = id;
  let search = basket.find((x) => x.id === selectedId.id);

  if (search === undefined) {
    basket.push({
      id: selectedId.id,
      item: 1,
    });
  } else {
    search.item++;
  }
  generateCartItems();
  update(selectedId.id);
  calcaulation();
  localStorage.setItem("data", JSON.stringify(basket));
  // console.log(basket);
};
//! decrement
let decrement = (id) => {
  selectedId = id;
  let search = basket.find((x) => x.id === selectedId.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item--;
  }
  update(selectedId.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
  generateCartItems();
  calcaulation();
};

///todo update function

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calcaulation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  totalAmount();
  calcaulation();
  localStorage.setItem("data", JSON.stringify(basket));
};
let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calcaulation();
};
let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = data.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
    <h2>$${amount}</h2>
    <button class='checkout'>Check out</button>
    <button onclick="clearCart()" class='removeAll'>Clear cart</button>
    
    `;
  } else return;
};
totalAmount();

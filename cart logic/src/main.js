document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");
  console.log(selectedCategory);
  const categoriesContent = decodeURIComponent(
    urlParams.get("categoriesContent")
  );
  // Get the categoryHeading element
  //* empty basket array
  let basket = JSON.parse(localStorage.getItem("data")) || [];

  const searchInput = document.getElementById("searchField");
  //todo get shop div
  let shop = document.getElementById("shop");
  //! Generate function
  let generateShop = () => {
    var desiredId = selectedCategory.toLowerCase();
    var extractedString = desiredId.slice(0, -1);

    // console.log(extractedString);
    const searchQuery = searchInput.value.toLowerCase();
    const filteredData = data.filter(
      (product) =>
        product.id.includes(extractedString) &&
        product.name.toLowerCase().includes(searchQuery)
    );
    // console.log(filteredData);
    return (shop.innerHTML = filteredData
      .map((products) => {
        let { id, name, description, price, img } = products;
        let search = basket.find((x) => x.id === id) || [];

        return `
        <div id=product-id-${id} class="item">
        <img width="200px"   src="${img}" alt="" >
          <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
              <h2>$${price}</h2>
              <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">${
          search.item === undefined ? 0 : search.item
        }</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
              </div>
          </div>
        </div>`;
      })
      .join(" "));
  };

  generateShop();

  //* increment
  window.increment = (id) => {
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
    update(selectedId.id);
    localStorage.setItem("data", JSON.stringify(basket));
    // console.log(basket);
  };
  //! decrement
  window.decrement = (id) => {
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
    // console.log(basket);
  };

  ///todo update function

  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calcaulation();
  };

  //! calcaulation function

  let calcaulation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };

  calcaulation();
  searchInput.addEventListener("input", () => {
    generateShop();
  });
});

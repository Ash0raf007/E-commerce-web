document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the stored products data from local storage
  const storedProductsString = localStorage.getItem("cartItems");
  const storedProducts = JSON.parse(storedProductsString);

  // Get the element where you want to display the product information
  const productList = document.getElementById("productList");

  // Iterate through each product and create the HTML structure
  storedProducts.forEach((product, index) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const categoryElement = document.createElement("p");
    categoryElement.textContent = `Category: ${product.category}`;

    const nameElement = document.createElement("p");
    nameElement.textContent = `Name: ${product.name}`;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: ${product.price}`;

    const countContainer = document.createElement("div");
    countContainer.classList.add("count-container");

    const countElement = document.createElement("p");
    countElement.textContent = `Count: ${product.count || 1}`;

    const increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", () => {
      // Increase the count of the product
      storedProducts[index].count = (storedProducts[index].count || 0) + 1;
      countElement.textContent = `Count: ${storedProducts[index].count}`;
      // Update the UI and local storage accordingly
      //   updateUI();
    });

    const decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", () => {
      // Decrease the count of the product, but ensure it's never negative
      storedProducts[index].count = Math.max(
        (storedProducts[index].count || 0) - 1,
        0
      );
      countElement.textContent = `Count: ${storedProducts[index].count}`;
      // Update the UI and local storage accordingly
      //   updateUI();
    });

    // Append elements to the count container
    countContainer.appendChild(decreaseButton);
    countContainer.appendChild(countElement);
    countContainer.appendChild(increaseButton);

    // Append elements to the product item
    productItem.appendChild(categoryElement);
    productItem.appendChild(nameElement);
    productItem.appendChild(priceElement);
    productItem.appendChild(countContainer);

    // Append the product item to the product list
    productList.appendChild(productItem);
  });
});

const toggleDarkModeButton = document.getElementById("changeColors");
const root = document.documentElement;

toggleDarkModeButton.addEventListener("click", () => {
  root.classList.toggle("dark-mode");

  if (root.classList.contains("dark-mode")) {
    toggleDarkModeButton.textContent = "Dark Mode";
    root.classList.toggle("color-change");
    categoryHeading.style.color = "white";
  } else {
    toggleDarkModeButton.textContent = "White Mode";
    root.classList.toggle("color-change");
    categoryHeading.style.color = "black";
  }
});

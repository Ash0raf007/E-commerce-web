const categories = [
  {
    product1: {
      category: "desktop",
      name: "pc workshop",
      description: "good for students",
      price: "$480.00",
      delPrice: "$550.00",
    },
    product2: {
      category: "desktop",
      name: "pc lenovo",
      description: "good for employees",
      price: "$550.00",
      delPrice: "$750.00",
    },
    product3: {
      category: "desktop",
      name: "gaming pc",
      description: "good for gamers",
      price: "$480.00",
      delPrice: "$660.00",
    },
    product4: {
      category: "desktop",
      name: "pc ",
      description: "good for all",
      price: "$480.00",
      delPrice: "$550.00",
    },
    product5: {
      category: "desktop",
      name: "pc workshop",
      description: "good for students",
      price: "$480.00",
      delPrice: "$550.00",
    },
  },
];
var input = "desktop";
for (var i = 0; i < categories.length; i++) {
  const category = categories[i];
  for (const productKey in category) {
    const product = category[productKey];
    console.log("Category:", product.category);
    console.log("Name:", product.name);
    console.log("Description:", product.description);
    console.log("Price:", product.price);
    console.log("Delivery Price:", product.delPrice);
    console.log("-------------------------");
  }
}

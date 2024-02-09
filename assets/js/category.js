const data = [
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
    product6: {
      category: "laptop",
      name: "15ITL6",
      description:
        "Ideapad 3 CORE I3 1115 G4-15.6 Inch FHD- RAM 4G- HDD 256 SSD - Intel UHD Graphics-DOS- Abyss Blue (82H802ADED)",
      price: "$900.00",
      delPrice: "$1100.00",
    },
    product7: {
      category: "laptop",
      name: " 3510 i7 16G 1T 256SSD",
      description:
        'Dell Vostro 3510 laptop - 11th Gen Intel core i7-1165G7, 16GB RAM, 1TB HDD + 256GB SSD, Nvidia GeForce MX350 GDDR5 Graphics, 15.6" FHD (1920 x 1080) An ti-glare LED Narrow Border, Ubuntu - Carbon Black',
      price: "$1080.00",
      delPrice: "$1300.00",
    },
    product8: {
      category: "laptop",
      name: "Lenovo Legion 5 15IAH7H Laptop",
      description:
        '12th Intel® Core i7-12700H 14Cores, 16 GB RAM DDR5-4800, 1 TB SSD, NVIDIA GeForce RTX 3060 6GB GDDR6 Graphics, 15.6" WQHD (2560x1440) IPS 300nits 165Hz, 4Z RGB Backlit',
      price: "$1300.00",
      delPrice: "$1000.00",
    },
    product9: {
      category: "laptop",
      name: "Lenovo Legion 5 15ITH6H Laptop",
      description:
        'Intel Core i7-11800H 8-Cores, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 3070 8GB GDDR6 Graphics, 15.6" FHD (1920x1080) IPS 165Hz, 4-Zone RGB Backlit, Dos - Phantom Blue',
      price: "$1480.00",
      delPrice: "$1650.00",
    },
    product10: {
      category: "laptop",
      name: "Lenovo Legion 5",
      description:
        '15ARH7H 15.6"/AMD Ryzen7/6800H/16G/1TBSSD/RTX3060/Storm Gray/Win 11',
      price: "$1420.00",
      delPrice: "$1550.00",
    },
    product11: {
      category: "camera",
      name: "eufy",
      description:
        "Battery-powered wireless surveillance camera up to 365 days T88413D2",
      price: "$700.00",
      delPrice: "$800.00",
    },
    product12: {
      category: "camera",
      name: "Canon",
      description:
        "Canon EOS 2000D DSLR camera with EFS with 18-55mm III lens kit",
      price: "$1220.00",
      delPrice: "$1650.00",
    },
    product13: {
      category: "camera",
      name: "Lenovo Legion 5",
      description:
        '15ARH7H 15.6"/AMD Ryzen7/6800H/16G/1TBSSD/RTX3060/Storm Gray/Win 11',
      price: "$1420.00",
      delPrice: "$1550.00",
    },
    product14: {
      category: "camera",
      name: "Canon : EOS R",
      description:
        "Canon EOS RP Mirrorless Camera، With RF 24-105mm F4-7.1 IS STM Lens، 26.2 MP، Full Frame، Dual Pixel CMOS AF، 5 fps، 4K Movies، Wi-Fi، Bluetooth",
      price: "$1320.00",
      delPrice: "$1650.00",
    },
    product15: {
      category: "camera",
      name: "Fujifilm",
      description: "Instax mini 11 instant film camera - ice white",
      price: "$142.00",
      delPrice: "$155.00",
    },
    product16: {
      category: "tablet",
      name: "XP-PEN",
      description:
        "XP-PEN Deco Fun XS OSU Tablet Graphic Drawing Tablets 4x3 Inches Pen Tablet with Battery-Free Stylus",
      price: "$142.00",
      delPrice: "$155.00",
    },
    product17: {
      category: "tablet",
      name: "XP-Pen",
      description:
        "XP-Pen G640S V2 Graphics Digital Drawing Tablet 8192 Pen Pressure With 6 Shortcut Keys & for Signature osu!",
      price: "$122.00",
      delPrice: "$165.00",
    },
    product18: {
      category: "tablet",
      name: "HUION",
      description:
        "HUION Graphics Tablet HS64 8192 Pressure Pen Tablet Battery-free Pen with 4 Keys Press Supports Android 6.0 as well as Windows and MacOS",
      price: "$112.00",
      delPrice: "$175.00",
    },
    product19: {
      category: "tablet",
      name: "VEIKK",
      description:
        "VEIKK A30/8192 Graphics Drawing Tablet with Battery-free Passive Pen",
      price: "$112.00",
      delPrice: "$165.00",
    },
    product20: {
      category: "tablet",
      name: "HUION",
      description:
        "HUION 420 4 Professional Signature Digital Pen with Graphics Drawing Tablet and Mini USB, 2724303762875",
      price: "$112.00",
      delPrice: "$185.00",
    },
    product21: {
      category: "headphone",
      name: "AKG",
      description:
        "AKG K240 MKII Professional Semi-Open Over-Ear Studio Headphones",
      price: "$90.00",
      delPrice: "$110.00",
    },
    product22: {
      category: "headphone",
      name: "Lenovo",
      description:
        "Lenovo XT90 Wireless Headphones, HD Stereo Headphones, Bluetooth 5.0 Touch Control Headphones, With Microphone, 300 MAh, Black",
      price: "$80.00",
      delPrice: "$110.00",
    },
    product23: {
      category: "headphone",
      name: "Sound Core",
      description:
        "Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones, Multipoint Connection",
      price: "$129.00",
      delPrice: "$150.00",
    },
    product24: {
      category: "headphone",
      name: "JBL",
      description: "JBL TUNE T510BT WIRELESS ON-EAR HEADPHONES, BLUE",
      price: "$120.00",
      delPrice: "$155.00",
    },
    product25: {
      category: "headphone",
      name: "OPPO",
      description:
        "OPPO Enco Air2 Pro- Wireless Headphones, Bluetooth 5.2, Noise Cancellation, Fast Charging, Large Capacity Battery, White",
      price: "$122.00",
      delPrice: "$155.00",
    },
    product26: {
      category: "formal",
      name: "American Eagle",
      description:
        "OPAE Cozy Cabin Flannel 100% Cotton Material composition: 100% Cotton Style: Carrot",
      price: "$99.00",
      delPrice: "$120.00",
    },
    product27: {
      category: "formal",
      name: "JACK&JONES ESSENTIALS",
      description:
        "MAXIMUM TEMPERATURE 40C NORMAL PROCESSDO NOT BLEACHTUMBLE DRYING POSSIBLE DRYING AT LOWER TEMPERATUREIRON AT MAXIMUM SOLE-PLATE TEMPERATURE OF 150CDO NOT DRY CLEAN",
      price: "$132.00",
      delPrice: "$155.00",
    },
    product28: {
      category: "formal",
      name: "White Rabbit",
      description: "White Rabbit Men Red Right Sleeve Polo Shirt",
      price: "$122.00",
      delPrice: "$155.00",
    },
    product29: {
      category: "formal",
      name: "White Rabbit",
      description:
        "White Rabbit Men Mandarin Collar Half Sleeves Button Down Shirt",
      price: "$122.00",
      delPrice: "$155.00",
    },
    product30: {
      category: "formal",
      name: "White Rabbit",
      description:
        "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
      price: "$80.00",
      delPrice: "$100.00",
    },
    product31: {
      category: "casual",
      name: "EEZEEY",
      description:
        "EEZEEY mens Plain Casual Polo Shirt Plain Casual Polo Shirt",
      price: "$70.00",
      delPrice: "$110.00",
    },
    product32: {
      category: "casual",
      name: "Andora",
      description: "Andora Mens 33S22M3901 Shirt",
      price: "$70.00",
      delPrice: "$100.00",
    },
    product33: {
      category: "casual",
      name: "White Rabbit",
      description:
        "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
      price: "$80.00",
      delPrice: "$100.00",
    },
    product34: {
      category: "casual",
      name: "White Rabbit",
      description:
        "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
      price: "$80.00",
      delPrice: "$100.00",
    },
    product35: {
      category: "casual",
      name: "White Rabbit",
      description:
        "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
      price: "$80.00",
      delPrice: "$100.00",
    },
    product36: {
      category: "sports",
      name: "adidas",
      description:
        "adidas Mens Essentials Single Jersey 3-Stripes T-Shirt T-SHIRTS for Men T-Shirt",
      price: "$60.00",
      delPrice: "$90.00",
    },
    product37: {
      category: "sports",
      name: "Diadora",
      description: "Diadora For Men Sports T-Shirt Turqiouse",
      price: "$60.00",
      delPrice: "$90.00",
    },
    product38: {
      category: "sports",
      name: "Nexus",
      description: "Nexus Essentials Training Tops For Men",
      price: "$70.00",
      delPrice: "$90.00",
    },
    product39: {
      category: "sports",
      name: "Diadora",
      description: "Diadora For Men Sports Pants Black",
      price: "$70.00",
      delPrice: "$110.00",
    },
    product40: {
      category: "sports",
      name: "DOTT JEANS WEAR",
      description: "DOTT JEANS WEAR Men Sport Diving Relaxed Fit Sweatpants",
      price: "$80.00",
      delPrice: "$100.00",
    },
    product41: {
      category: "jacket",
      name: "Firewood",
      description: "Firewood Mens Basic Bomber Jacket Jacket",
      price: "$120.00",
      delPrice: "$180.00",
    },
    product42: {
      category: "jacket",
      name: "Activ",
      description: "Activ Mens ACTIV WATERPROOF HOODIE JACKET Jacket",
      price: "$180.00",
      delPrice: "$200.00",
    },
    product43: {
      category: "jacket",
      name: "Andora",
      description: "Andora Cotton Solid High-Neck Zip-Up Puffer Jacket for Men",
      price: "$190.00",
      delPrice: "$250.00",
    },
    product44: {
      category: "jacket",
      name: "Firewood",
      description: "Firewood Mens Basic 2 Pocket Jacket Jacket",
      price: "$150.00",
      delPrice: "$160.00",
    },
    product45: {
      category: "jacket",
      name: "Off Cliff",
      description:
        "Off Cliff Men Long Sleeves Zipper Jacket With Hoodie Casual Jacket",
      price: "$80.00",
      delPrice: "$120.00",
    },
    product46: {
      category: "sunglasses",
      name: "Pro Acme",
      description:
        "Pro Acme Classic Aviator Sunglasses for Men Women 100% Real Glass Lens",
      price: "$80.00",
      delPrice: "$120.00",
    },
    product47: {
      category: "sunglasses",
      name: "ROYAL SON",
      description:
        "Royal Son Unique Classic Hexagonal/Polygon Casual Fashion Sunglasses Men Women UV400 Protection",
      price: "$80.00",
      delPrice: "$120.00",
    },
    product48: {
      category: "sunglasses",
      name: "THE PACK Store",
      description:
        "Irregular Small Rectangle Sunglasses for Women Men UV Protection",
      price: "$80.00",
      delPrice: "$120.00",
    },
    product49: {
      category: "sunglasses",
      name: " U-HOOME",
      description:
        "With It Glasses 8 bits Mosaic Pixel Sunglasses Men Women Party Eyewear Dealwithit thug life Popular Around the World, Black",
      price: "$80.00",
      delPrice: "$120.00",
    },
    product50: {
      category: "sunglasses",
      name: "ALMADINA",
      description: "Fashion Black SMU09 Women Sunglasses",
      price: "$80.00",
      delPrice: "$120.00",
    },
    product51: {
      category: "perfume",
      name: "Lady Speed Stick",
      description:
        "Lady Speed Stick Aloe Protection, Antiperspirant Deodorant, Sensitive Spray 150Ml",
      price: "$40.00",
      delPrice: "$80.00",
    },
    product52: {
      category: "perfume",
      name: "	horizon perfumes",
      description: "Scandall Horizon for women",
      price: "$40.00",
      delPrice: "$80.00",
    },
    product53: {
      category: "perfume",
      name: "	horizon perfumes",
      description: "Khamraah By horizon",
      price: "$78.00",
      delPrice: "$100.00",
    },
    product54: {
      category: "perfume",
      name: "horizon perfumes",
      description: "horizon perfumes  ",
      price: "$40.00",
      delPrice: "$80.00",
    },
    product55: {
      category: "perfume",
      name: "	GUESS",
      description: "Guess pink by guess for women - eau de parfum, 75ml",
      price: "$50.00",
      delPrice: "$90.00",
    },
  },
];
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the category and categoriesContent parameters from the URL
  const container = document.getElementById("container");
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");
  const categoriesContent = decodeURIComponent(
    urlParams.get("categoriesContent")
  );

  // Get the categoryHeading element
  var categoryHeading = document.getElementById("categoryHeading");
  categoryHeading.style.color = "black";
  if (categoryHeading && selectedCategory) {
    // Update the categoryHeading with the selected category
    categoryHeading.innerHTML = selectedCategory;
  }

  // Update the content of the categories element
  var categories = document.querySelector("product-grid");
  if (categories) {
    categories.innerHTML = categoriesContent;
  }
  let productsHTML = "";
  for (var i = 0; i < data.length; i++) {
    const category = data[i];
    for (const productKey in category) {
      const product = category[productKey];

      if (product.category === categoryHeading.innerHTML.toLowerCase()) {
        i += 1;
        const productHTML = `

        <div class="showcase" id = ${product.name}>
  
          <div class="showcase-banner">
  
            <img src="./assets/images/products/${categoryHeading.innerHTML.toLowerCase()}/${i}.jpg" alt="Mens Winter Leathers Jackets" width="200"   class="product-img default">
            <img src="./assets/images/products/${categoryHeading.innerHTML.toLowerCase()}/${i}.jpg" alt="Mens Winter Leathers Jackets" width="200"  class="product-img hover">
  
            <p class="showcase-badge">15%</p>
  
            <div class="showcase-actions">
  
              <button class="btn-action">
                <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline"></ion-icon>
              </button>
  
              <button class="btn-action">
                <ion-icon name="eye-outline" role="img" class="md hydrated" aria-label="eye outline"></ion-icon>
              </button>
  
              <button class="btn-action">
                <ion-icon name="repeat-outline" role="img" class="md hydrated" aria-label="repeat outline"></ion-icon>
              </button>
  
              <button class="btn-action card">
                <ion-icon name="bag-add-outline" role="img" class="md hydrated" aria-label="bag add outline"></ion-icon>
              </button>
  
            </div>
  
          </div>
  
          <div class="showcase-content">
  
            <a href="#" class="showcase-category">${product.name}</a>
  
            <a href="#">
              <h3 class="showcase-title">${product.description}</h3>
            </a>
  
            <div class="showcase-rating">
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
              <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
              <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
            </div>
  
            <div class="price-box">
              <p class="price">${product.price}</p>
              <del>${product.delPrice}</del>
            </div>
  
          </div>
  
        </div>
      </div>
       `;
        productsHTML += productHTML;
        container.innerHTML = productsHTML;
      }
    }
  }
  // const addToCartButtons = document.querySelectorAll("card");
  function myFunction() {
    // Declare variables
    var input, filter, productDivs, product, i, txtValue;
    input = document.getElementById("searchField");
    filter = input.value.toLowerCase();

    productDivs = container.getElementsByClassName("showcase");

    // Loop through all product divs and hide/show those that match the search query
    for (i = 0; i < productDivs.length; i++) {
      product = productDivs[i];
      txtValue = product.textContent || product.innerText;

      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  }
  const searchInput = document.getElementById("searchField");

  // Add event listener to the search input

  searchInput.addEventListener("input", myFunction);

  // Initial call to display products based on default state
  myFunction();

  // Event listener to trigger the filtering when the user types

  // Initial call to populate the product list

  // Get the count element

  // Initialize a counter
  let cartItemCount = 0;

  // Add click event listeners to the selected "Add to Cart" buttons

  // Check if cartItems is null or undefined in local storage
  // Check if cartItems is null or undefined in local storage
  const storedCartItems = localStorage.getItem("cartItems");
  const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

  // Add click event listeners to the selected "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".btn-action.card");
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log(index);
      const selectedCategory = data.find((category) => {
        return (
          category[Object.keys(category)[0]].category ===
          categoryHeading.innerHTML.toLowerCase()
        );
      }); // Make sure this index is correct

      const selectedProduct =
        selectedCategory[Object.keys(selectedCategory)[index + 1]];

      // Push the selected product to the cartItems array
      cartItems.push(selectedProduct);

      // Update local storage with the updated cartItems array
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      // Log for testing
      cartItemCount++;

      // Your cart update logic here
    });
  });
});

const countElement = document.querySelector(".count");
const storedArray = JSON.parse(localStorage.getItem("cartItems"));
if (Array.isArray(storedArray)) {
  const arrayLength = storedArray.length;
  countElement.textContent = storedArray.length;
} else {
  countElement.textContent = 0;
}
// console.log(storedArray);

{
  /* <div class="product-main">
    
            

    <div class="product-grid">

      <div class="showcase">

        <div class="showcase-banner">

          <img src="./assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img default">
          <img src="./assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width="300" class="product-img hover">

          <p class="showcase-badge">15%</p>

          <div class="showcase-actions">

            <button class="btn-action">
              <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="eye-outline" role="img" class="md hydrated" aria-label="eye outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="repeat-outline" role="img" class="md hydrated" aria-label="repeat outline"></ion-icon>
            </button>

            <button class="btn-action">
              <ion-icon name="bag-add-outline" role="img" class="md hydrated" aria-label="bag add outline"></ion-icon>
            </button>

          </div>

        </div>

        <div class="showcase-content">

          <a href="#" class="showcase-category">jacket</a>

          <a href="#">
            <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
          </a>

          <div class="showcase-rating">
            <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
            <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
            <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
            <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
            <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
          </div>

          <div class="price-box">
            <p class="price">$48.00</p>
            <del>$75.00</del>
          </div>

        </div>

      </div>
    </div>
</div> */
}

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

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  // mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  // overlay.addEventListener("click", mobileMenuCloseFunc);
}

const data = [
  {
    id: "desktop1",
    name: "pc workshop",
    description: "good for students",
    price: 480.0,
    img: "./images/desktop/1.jpg",
  },
  {
    id: "desktop2",
    name: "pc lenovo",
    description: "good for employees",
    price: 550.0,
    img: "./images/desktop/2.jpg",
  },
  {
    id: "desktop3",
    name: "gaming pc",
    description: "good for gamers",
    price: 480.0,
    img: "./images/desktop/3.jpg",
  },
  {
    id: "desktop4",
    name: "pc ",
    description: "good for all",
    price: 480.0,
    img: "./images/desktop/4.jpg",
  },
  {
    id: "desktop5",
    name: "pc workshop",
    description: "good for students",
    price: 480.0,
    img: "./images/desktop/5.jpg",
  },
  {
    id: "laptop1",
    name: "15ITL6",
    description:
      "Ideapad 3 CORE I3 1115 G4-15.6 Inch FHD- RAM 4G- HDD 256 SSD - Intel UHD Graphics-DOS- Abyss Blue (82H802ADED)",
    price: 900.0,
    img: "./images/laptop/1.jpg",
  },
  {
    id: "laptop2",
    name: " 3510 i7 16G 1T 256SSD",
    description:
      'Dell Vostro 3510 laptop - 11th Gen Intel core i7-1165G7, 16GB RAM, 1TB HDD + 256GB SSD, Nvidia GeForce MX350 GDDR5 Graphics, 15.6" FHD (1920 x 1080) An ti-glare LED Narrow Border, Ubuntu - Carbon Black',
    price: 1080.0,
    img: "./images/laptop/2.jpg",
  },
  {
    id: "laptop3",
    name: "Lenovo Legion 5 15IAH7H Laptop",
    description:
      '12th Intel® Core i7-12700H 14Cores, 16 GB RAM DDR5-4800, 1 TB SSD, NVIDIA GeForce RTX 3060 6GB GDDR6 Graphics, 15.6" WQHD (2560x1440) IPS 300nits 165Hz, 4Z RGB Backlit',
    price: 1300.0,

    img: "./images/laptop/3.jpg",
  },
  {
    id: "laptop4",
    name: "Lenovo Legion 5 15ITH6H Laptop",
    description:
      'Intel Core i7-11800H 8-Cores, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 3070 8GB GDDR6 Graphics, 15.6" FHD (1920x1080) IPS 165Hz, 4-Zone RGB Backlit, Dos - Phantom Blue',
    price: 1480.0,
    img: "./images/laptop/4.jpg",
  },
  {
    id: "laptop5",
    name: "Lenovo Legion 5",
    description: '15ARH7H 15.6"/AMD Ryzen7/6800H/16G/1TBSSD/',
    price: 1420.0,
    img: "./images/laptop/5.jpg",
  },
  {
    id: "camera1",
    name: "eufy",
    description:
      "Battery-powered wireless surveillance camera up to 365 days T88413D2",
    price: 700.0,
    img: "./images/camera/1.jpg",
  },
  {
    id: "camera2",
    name: "Canon",
    description:
      "Canon EOS 2000D DSLR camera with EFS with 18-55mm III lens kit",
    price: 1220.0,
    img: "./images/camera/2.jpg",
  },
  {
    id: "camera3",
    name: "Lenovo Legion 5",
    description: '15ARH7H 15.6"/AMD Ryzen7/6800H/16G/',
    price: 1420.0,
    img: "./images/camera/3.jpg",
  },
  {
    id: "camera4",
    name: "Canon : EOS R",
    description:
      "Canon EOS RP Mirrorless Camera، With RF 24-105mm F4-7.1 IS STM Lens، 26.2 MP، Full Frame، Dual Pixel CMOS AF، 5 fps، 4K Movies، Wi-Fi، Bluetooth",
    price: 1320.0,
    img: "./images/camera/4.jpg",
  },
  {
    id: "camera5",
    name: "Fujifilm",
    description: "Instax mini 11 instant film camera - ice white",
    price: 142.0,
    img: "./images/camera/5.jpg",
  },
  {
    id: "tablet1",
    name: "XP-PEN",
    description:
      "XP-PEN Deco Fun XS OSU Tablet Graphic Drawing Tablets 4x3 Inches Pen Tablet with Battery-Free Stylus",
    price: 142.0,
    img: "./images/tablet/1.jpg",
  },
  {
    id: "tablet2",
    name: "XP-Pen",
    description:
      "XP-Pen G640S V2 Graphics Digital Drawing Tablet 8192 Pen Pressure With 6 Shortcut Keys & for Signature osu!",
    price: 122.0,
    img: "./images/tablet/2.jpg",
  },
  {
    id: "tablet3",
    name: "HUION",
    description:
      "HUION Graphics Tablet HS64 8192 Pressure Pen Tablet Battery-free Pen with 4 Keys Press Supports Android 6.0 as well as Windows and MacOS",
    price: 112.0,
    img: "./images/tablet/3.jpg",
  },
  {
    id: "tablet4",
    name: "VEIKK",
    description:
      "VEIKK A30/8192 Graphics Drawing Tablet with Battery-free Passive Pen",
    price: 112.0,
    img: "./images/tablet/4.jpg",
  },
  {
    id: "tablet5",
    name: "HUION",
    description:
      "HUION 420 4 Professional Signature Digital Pen with Graphics Drawing Tablet and Mini USB, 2724303762875",
    price: 112.0,
    img: "./images/tablet/5.jpg",
  },
  {
    id: "headphone1",
    name: "AKG",
    description:
      "AKG K240 MKII Professional Semi-Open Over-Ear Studio Headphones",
    price: 90.0,
    img: "./images/headphone/1.jpg",
  },
  {
    id: "headphone2",
    name: "Lenovo",
    description:
      "Lenovo XT90 Wireless Headphones, HD Stereo Headphones, Bluetooth 5.0 Touch Control Headphones, With Microphone, 300 MAh, Black",
    price: 80.0,
    img: "./images/headphone/2.jpg",
  },
  {
    id: "headphone3",
    name: "Sound Core",
    description:
      "Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones, Multipoint Connection",
    price: 129.0,
    img: "./images/headphone/3.jpg",
  },
  {
    id: "headphone4",
    name: "JBL",
    description: "JBL TUNE T510BT WIRELESS ON-EAR HEADPHONES, BLUE",
    price: 120.0,
    img: "./images/headphone/4.jpg",
  },
  {
    id: "headphone5",
    name: "OPPO",
    description:
      "OPPO Enco Air2 Pro- Wireless Headphones, Bluetooth 5.2, Noise Cancellation, Fast Charging, Large Capacity Battery, White",
    price: 122.0,
    img: "./images/headphone/5.jpg",
  },
  {
    id: "formal1",
    name: "American Eagle",
    description:
      "OPAE Cozy Cabin Flannel 100% Cotton Material composition: 100% Cotton Style: Carrot",
    price: 99.0,
    img: "./images/formal/1.jpg",
  },
  {
    id: "formal2",
    name: "JACK&JONES ESSENTIALS",
    description:
      "MAXIMUM TEMPERATURE 40C NORMAL PROCESSDO NOT BLEACHTUMBLE DRYING POSSIBLE DRYING AT LOWER TEMPERATUREIRON AT MAXIMUM SOLE-PLATE TEMPERATURE OF 150CDO NOT DRY CLEAN",
    price: 132.0,
    img: "./images/formal/2.jpg",
  },
  {
    id: "formal3",
    name: "White Rabbit",
    description: "White Rabbit Men Red Right Sleeve Polo Shirt",
    price: 122.0,
    img: "./images/formal/3.jpg",
  },
  {
    id: "formal4",
    name: "White Rabbit",
    description:
      "White Rabbit Men Mandarin Collar Half Sleeves Button Down Shirt",
    price: 122.0,
    img: "./images/formal/4.jpg",
  },
  {
    id: "formal5",
    name: "White Rabbit",
    description:
      "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
    price: 80.0,
    img: "./images/formal/5.jpg",
  },
  {
    id: "casual1",
    name: "EEZEEY",
    description: "EEZEEY mens Plain Casual Polo Shirt Plain Casual Polo Shirt",
    price: 70.0,
    img: "./images/casual/1.jpg",
  },
  {
    id: "casual2",
    name: "Andora",
    description: "Andora Mens 33S22M3901 Shirt",
    price: 70.0,
    img: "./images/casual/2.jpg",
  },
  {
    id: "casual3",
    name: "White Rabbit",
    description:
      "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
    price: 80.0,
    img: "./images/casual/3.jpg",
  },
  {
    id: "casual4",
    name: "White Rabbit",
    description:
      "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
    price: 80.0,
    img: "./images/casual/4.jpg",
  },
  {
    id: "casual5",
    name: "White Rabbit",
    description:
      "White Rabbit Men White Buttons Long Sleeves Plain Black Shirt",
    price: 80.0,
    img: "./images/casual/5.jpg",
  },
  {
    id: "sports1",
    name: "adidas",
    description:
      "adidas Mens Essentials Single Jersey 3-Stripes T-Shirt T-SHIRTS for Men T-Shirt",
    price: 60.0,
    img: "./images/sports/1.jpg",
  },
  {
    id: "sports2",
    name: "Diadora",
    description: "Diadora For Men Sports T-Shirt Turqiouse",
    price: 60.0,
    img: "./images/sports/2.jpg",
  },
  {
    id: "sports3",
    name: "Nexus",
    description: "Nexus Essentials Training Tops For Men",
    price: 70.0,

    img: "./images/sports/3.jpg",
  },
  {
    id: "sports4",
    name: "Diadora",
    description: "Diadora For Men Sports Pants Black",
    price: 70.0,
    img: "./images/sports/4.jpg",
  },
  {
    id: "sports5",
    name: "DOTT JEANS WEAR",
    description: "DOTT JEANS WEAR Men Sport Diving Relaxed Fit Sweatpants",
    price: 80.0,
    img: "./images/sports/5.jpg",
  },
  {
    id: "jacket1",
    name: "Firewood",
    description: "Firewood Mens Basic Bomber Jacket Jacket",
    price: 120.0,
    img: "./images/jacket/1.jpg",
  },
  {
    id: "jacket2",
    name: "Activ",
    description: "Activ Mens ACTIV WATERPROOF HOODIE JACKET Jacket",
    price: 180.0,
    img: "./images/jacket/2.jpg",
  },
  {
    id: "jacket3",
    name: "Andora",
    description: "Andora Cotton Solid High-Neck Zip-Up Puffer Jacket for Men",
    price: 190.0,
    img: "./images/jacket/3.jpg",
  },
  {
    id: "jacket4",
    name: "Firewood",
    description: "Firewood Mens Basic 2 Pocket Jacket Jacket",
    price: 150.0,
    img: "./images/jacket/4.jpg",
  },
  {
    id: "jacket5",
    name: "Off Cliff",
    description:
      "Off Cliff Men Long Sleeves Zipper Jacket With Hoodie Casual Jacket",
    price: 80.0,
    img: "./images/jacket/5.jpg",
  },
  {
    id: "sunglasses1",
    name: "Pro Acme",
    description:
      "Pro Acme Classic Aviator Sunglasses for Men Women 100% Real Glass Lens",
    price: 80.0,
    img: "./images/sunglasses/1.jpg",
  },
  {
    id: "sunglasses2",
    name: "ROYAL SON",
    description:
      "Royal Son Unique Classic Hexagonal/Polygon Casual Fashion Sunglasses Men Women UV400 Protection",
    price: 80.0,
    img: "./images/sunglasses/2.jpg",
  },
  {
    id: "sunglasses3",
    name: "THE PACK Store",
    description:
      "Irregular Small Rectangle Sunglasses for Women Men UV Protection",
    price: 80.0,
    img: "./images/sunglasses/3.jpg",
  },
  {
    id: "sunglasses4",
    name: " U-HOOME",
    description:
      "With It Glasses 8 bits Mosaic Pixel Sunglasses Men Women Party Eyewear Dealwithit thug life Popular Around the World, Black",
    price: 80.0,

    img: "./images/sunglasses/4.jpg",
  },
  {
    id: "sunglasses5",
    name: "ALMADINA",
    description: "Fashion Black SMU09 Women Sunglasses",
    price: 80.0,
    img: "./images/sunglasses/5.jpg",
  },
  {
    id: "perfume1",
    name: "Lady Speed Stick",
    description:
      "Lady Speed Stick Aloe Protection, Antiperspirant Deodorant, Sensitive Spray 150Ml",
    price: 40.0,
    img: "./images/perfume/1.jpg",
  },
  {
    id: "perfume2",
    name: "	horizon perfumes",
    description: "Scandall Horizon for women",
    price: 40.0,
    img: "./images/perfume/2.jpg",
  },
  {
    id: "perfume3",
    name: "	horizon perfumes",
    description: "Khamraah By horizon",
    price: 78.0,
    img: "./images/perfume/3.jpg",
  },
  {
    id: "perfume4",
    name: "horizon perfumes",
    description: "horizon perfumes  ",
    price: 40.0,
    img: "./images/perfume/4.jpg",
  },
  {
    id: "perfume5",
    name: "	GUESS",
    description: "Guess pink by guess for women - eau de parfum, 75ml",
    price: 50.0,
    img: "./images/perfume/5.jpg",
  },
];

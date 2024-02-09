const urlToOpen = "./cart logic/index.html";
let categories = document.querySelector("product-grid");
var categoryHeading = document.getElementById("categoryHeading");
var category = document.querySelectorAll(".panel-list-item a");

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", () => {
    var item = category[i].innerHTML;
    window.open(urlToOpen, "_blank");
    console.log(categoryHeading);
  });
}

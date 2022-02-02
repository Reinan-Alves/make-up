function filterType() {
  let products = document.querySelectorAll(".product");
  let SelectFilterType = document.querySelector("#filter-type");
  let optionValue = SelectFilterType.value; //funcionando
  for (var i = 0; i < products.length; i++) {
    let product = products[i];
    let allType = product.querySelector(".product-type");
    let type = allType.textContent; // funcionando
    if (optionValue == type || optionValue == 1) {
      product.classList.remove("invisible");
    } else {
      product.classList.add("invisible");
    }
  }
}

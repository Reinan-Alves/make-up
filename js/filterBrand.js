function filterBrands() {
  let products = document.querySelectorAll(".product");
  let SelectFilterBrand = document.querySelector("#filter-brand");
  let optionValue = SelectFilterBrand.value; //funcionando
  for (var i = 0; i < products.length; i++) {
    let product = products[i];
    let allBrands = product.querySelector(".product-brand");
    let brand = allBrands.textContent; // funcionando
    if (optionValue == brand || optionValue == 1) {
      product.classList.remove("invisible");
    } else {
      product.classList.add("invisible");
    }
  }
}

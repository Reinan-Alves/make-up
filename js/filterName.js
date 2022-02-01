const filterNameInput = document.querySelector("#filter-name");

filterNameInput.addEventListener("input", function () {
  var products = document.querySelectorAll(".product");

  if (this.value.length > 0) {
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      var allName = product.querySelector(".product-name");
      var name = allName.textContent; //funcionando pegando o nome dos produtos
      var expression = new RegExp(this.value, "i");
      console.log(expression);
      if (!expression.test(name)) {
        product.classList.add("invisible");
      } else {
        product.classList.remove("invisible");
      }
    }
  } else {
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      product.classList.remove("invisible");
    }
  }
});

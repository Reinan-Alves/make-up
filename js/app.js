const catalogo = document.querySelector(".catalog");
//chamada da função com que gera o catalogo de produtos
catalogs();

function fectchJson(url) {
  return fetch(url).then((resposta) => {
    if (resposta.ok) {
      // verificando se o retorno foi 200
      console.log("Servidor carregou joinha!");
      return resposta.json();
    } else {
      throw new Error(resposta.statusText); // tratamento do erro com uma classe nativa do Js
    }
  });
}

async function catalogs() {
  try {
    let [product] = await Promise.all([
      fectchJson("http://makeup-api.herokuapp.com/api/v1/products.json/"),
    ]);
    let dados = productItem(product);
    catalogo.innerHTML = dados;
  } catch (erro) {
    // o catch faz  o tratamento ou do erro
    showErro(erro);
  }
}

function showErro(erro) {
  catalogo.innerHTML = erro;
}

// catalogo de produtos

function productItem(product) {
  let divProducts = product.map((item) => {
    let productDetails = loadDetails(item);
    let preco = item.price * 5.5;
    let real = preco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return `<div class="product" data-name=${item.name} data-brand=${item.brand} data-type=${item.product_type} tabindex=${item.id}">
  <figure class="product-figure">
    <img src=${item.image_link} width="215" height="215" alt=${item.name} onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">${item.name}</h1>
    <div class="product-brands"><span class="product-brand background-brand">${item.brand}</span>
<span class="product-brand background-price">${real}</span></div>
  </section>
  <h5 style="text-align: center;">Product Details</h5>
  <div class ="details">${productDetails}</div>
</div>`;
  });
  return divProducts;
}

// detalhes do produto
function loadDetails(item) {
  let preco = item.price * 5.5;
  let real = preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${item.brand}</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${real}</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${item.rating}</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${item.category}</div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${item.product_type}</div>
        </div>
      </div></section>`;
  return details;
}

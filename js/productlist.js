const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product-gallery");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
  
            <article class="product">
                <h3>${product.productdisplayname}</h3>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
                <p class="price">${product.price} kr</p>
                <p>Brandname: ${product.brandname}</p>
                <p>Lager: ${product.soldout}</p>
                <p>Rabat: ${product.discount}%</p>
                <a href="product.html" class="btn">Køb nu</a>
            </article>
 
    `;
  });
}

getProducts();

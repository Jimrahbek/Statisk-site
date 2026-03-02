console.log("Product list JS is running");

const params = new URLSearchParams(window.location.search);

const category = params.get("category");

console.log(category);

// const fetchUrl = `https://kea-alt-del.dk/t7/api/products?category=${category}`;

// fetch(fetchUrl)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("Produkter:", data);
//   });

const listURL = category ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(category)}` : "https://kea-alt-del.dk/t7/api/products";
console.log(listURL);
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
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
                 <p class="brand">Brandname: ${product.brandname}</p>
                <h3>${product.productdisplayname}</h3>
                <p class="price">Pris: ${product.price} kr</p>
                <p>Lager: ${product.soldout}</p>
                <p>Rabat: ${product.discount}%</p>
                <p>category: ${product.category}</p>
                <a href="product.html?id=${product.id}" class="btn">Køb nu</a>
            </article>
 
    `;
  });
}

getProducts();

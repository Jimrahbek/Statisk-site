const id = 1165;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;

const imageContainer = document.querySelector(".product-image");
const detailsContainer = document.querySelector(".product-details");

function getData() {
  fetch(productURL)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(data) {
  imageContainer.innerHTML = `
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Produktbillede">
  `;

  detailsContainer.innerHTML = `
    <p class="brand">Brand: ${data.brandname}</p>
    <h1>${data.productdisplayname}</h1>
    <p class="price">Pris: ${data.price}</p>
    <p class="stock">Stock: ${data.soldout}</p>
    <button class="btn">Add to basket</button>
  `;
}

getData();

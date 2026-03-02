const listURL = "https://kea-alt-del.dk/t7/api/categories";

const listContainer = document.querySelector(".grid-container");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((category) => showCategory(category)));
}

function showCategory(parm) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  parm.forEach((myCategory) => {
    listContainer.innerHTML += ` 
            <article class="box">
        <a href="productlist.html?category=${myCategory.category}">
          ${myCategory.category}
        </a>
            </article>
    `;
  });
}

getProducts();

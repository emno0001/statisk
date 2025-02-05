const mycategory = new URLSearchParams(window.location.search).get("category");
document.querySelector("h1").innerHTML = mycategory;
console.log("produktliste loader... med category:", mycategory);
const product_list_containe = document.querySelector(".product_list_containe");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log("siden", products);
  const markup = products
    .map(
      (product) =>
        `
        <div class="box">
    ${product.soldout ? '<div class="text-box">Sold Out</div>' : ""}
    <img class="produkt_img ${product.soldout ? "sold_out" : ""}" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
    <h3>${product.productdisplayname}</h3>
    <p class="line">${product.articletype} - ${product.brandname}</p>
    <p>${product.category}</p>
    <div class="pris_container">
        <p>DKK ${product.price},-</p>
        <p class="rabat ${product.discount ? "isonsale" : ""}">-${product.discount}%</p>
    </div>
    <a href="produkt.html?product=${product.id}">Read more</a>
</div>
        
        `
    )
    .join("");
  product_list_containe.innerHTML = markup;
}

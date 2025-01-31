const product_list_containe = document.querySelector(".product_list_containe");

fetch(`https://kea-alt-del.dk/t7/api/products`)
.then((response) => response.json())
.then((data) => showList(data));

function showList(products){
    console.log(products);
    let markup = "";
    products
    .map((product) => {
        markup += `
        
        <div class="box">
                <img class="produkt_img" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                <h3>${product.productdisplayname}</h3>
                <p class="line">${product.articletype} - ${product.brandname}</p>
                <div class="pris_container">
                    <p>DKK ${product.price},-</p>
                    <p class="rabat hide">0%</p>
                </div>
                <a href="produkt.html">Read more</a>
        </div>`;
    })
    .join("");
    console.log(markup);
    product_list_containe.innerHTML = markup;
}
console.log("siden loades");
const myproduct = new URLSearchParams(window.location.search).get("product");

const produkt_container = document.querySelector(".produkt_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${myproduct}`)
  .then((response) => response.json())
  .then((data) => {
    produkt_container.innerHTML = `
    
    <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${myproduct}.webp" alt="produkt">
            </div>

            <div>
                <h2>Product information</h2>
                <h3>Model name</h3>
                <p class="left">${data.productdisplayname}</p>
                <h3>Color</h3>
                <p class="left">${data.basecolour}</p>
                <h3>Inventory number</h3>
                <p class="left">${data.id}</p>
                <h1>Nike</h1>
                <p>Nike, creating experiences for today's athete</p>

            </div>

            <div class="grå_bagrund">
                <h2 class="hvid">${data.productdisplayname}</h2>
                <h2 class="hvid">${data.variantname}</h2>
                <p class="line">${data.brandname} - ${data.articletype}</p>
                <label for="size">Vælg størrelse:</label>
        <select id="size">
            <option value="S">Small (S)</option>
            <option value="M">Medium (M)</option>
            <option value="L">Large (L)</option>
            <option value="XL">Extra Large (XL)</option>
        </select>
        <button id="addToCart">Tilføj til kurv</button>
            </div>
        </div>
        `;
  });
document.getElementById("addToCart").addEventListener("click", function () {
  const selectedSize = document.getElementById("size").value;
  console.log("Valgt størrelse:", selectedSize);
  alert(`Produkt tilføjet i størrelse ${selectedSize}`);
});

  


console.log(products)

//Gå gjennom alle produkter, generere  HTML for hvert produkt, skrive dette til index.html

let productHTML = ""

products.map((products, index) => productHTML += `<article class="product-card">
                <img src="./website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL"/>
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>kr. ${product.price},-</p>
                <button>Legg til i handlekurv</button>
            </article>`)

//Finn #productlist, og fyll den med verdiene i variabelen productHTML.
document.getElementById("productlist").innerHTML = productHTML

//Lage toggle-funksjonalitet for handlevogn
document.getElementById("shoppingcart").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("visible")
})


function loadProductDetails() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (product) {
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-price").innerText = "Price: " + product.price + " EGP";
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-des").innerText = product.dest;
        document.getElementById("product-specifications").innerText = product.specifications;

        // loadRelatedProducts(product.category);
    } else {
        document.querySelector(".product-details").innerHTML = "<p>لم يتم العثور على المنتج</p>";
    }
}

// function loadRelatedProducts(category) {
//     let relatedContainer = document.getElementById("related-products");
//     relatedContainer.innerHTML = "";

//     let related = products.filter(p => p.category === category).slice(0, 3);
//     related.forEach(product => {
//         let div = document.createElement("div");
//         div.classList.add("related-product");
//         div.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <p>${product.price} جنيه</p>
//         `;
//         div.onclick = () => {
//             localStorage.setItem("selectedProduct", JSON.stringify(product));
//             window.location.reload();
//         };
//         relatedContainer.appendChild(div);
//     });
// }

window.onload = loadProductDetails;
{/* </script> */}



const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
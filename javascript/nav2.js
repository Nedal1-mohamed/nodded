function loadProductDetails() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (product) {
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-description").innerText = product.description;
        // document.getElementById("product-price").innerText = "Price: " + product.price + " EGP";
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-des").innerText = product.dest;
        document.getElementById("product-specifications").innerText = product.specifications;

        // loadRelatedProducts(product.category);
    } else {
        document.querySelector(".product-details").innerHTML = "<p>لم يتم العثور على المنتج</p>";
    }
}

window.onload = loadProductDetails;
{/* </script> */}
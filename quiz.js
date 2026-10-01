// Cart counter

let cartCount = 0;


// Add product to cart

function addToCart(productName) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert(productName + " has been added to your cart!");
}


// Shop Now button

function shopNow() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


// Offer button

function showOffer() {

    alert("🎉 Special Offer!\n\nGet up to 30% OFF on selected products.");

}


// Newsletter subscription

function subscribe() {

    let email = document.getElementById("email").value;

    if (email === "") {

        alert("Please enter your email.");

    } else {

        alert("Thank you for subscribing to StyleMart!");

        document.getElementById("email").value = "";
    }

}


// explore buttons

document.addEventListener("DOMContentLoaded", function () {
    const productExploreMore = document.getElementById("product-explore__more");
    const contactExploreMore = document.getElementById("contact-explore__more");
    const locationExploreMore = document.getElementById("location-explore__more");

    if (productExploreMore) {
        productExploreMore.addEventListener("click", function () {
            window.location.href = "productspage.html";
        });
    }

    if (contactExploreMore) {
        contactExploreMore.addEventListener("click", function () {
            window.location.href = "contactus.html";
        });
    }
    
    if (locationExploreMore) {
        locationExploreMore.addEventListener("click", function () {
            window.location.href = "location.html";
        });
    }
})
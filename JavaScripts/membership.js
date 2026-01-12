
// Membership buttons

document.addEventListener("DOMContentLoaded", function () {

    const bronzeBtn = document.getElementById("bronze-btn");
    const silverBTn = document.getElementById("silver-btn");

    if (bronzeBtn) {
        bronzeBtn.addEventListener("click", function () {
            window.location.href = "productspage.html";
        });
    }

    if (silverBTn) {
        silverBTn.addEventListener("click", function () {
            window.location.href = "contactus.html";
        });
    }

});
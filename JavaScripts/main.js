

import { initCartMoreButtons } from "./cartmorebtn.js";
import { initProductPage } from "./Product.js";
import { initCartPage } from "./cart.js";
import { initSearchAutocomplete } from "./search.js";

document.addEventListener("DOMContentLoaded", () => {
    initCartMoreButtons();
    initProductPage();
    initCartPage();
    initSearchAutocomplete();
});

const shopNowBtn = document.getElementById("shopNow");
if (shopNowBtn) {
    shopNowBtn.addEventListener("click", () => {
        window.location.href = "productspage.html";
    });
}

let lastScrollTop = 0;
const header = document.querySelector(".header-container");

if (header) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        header.classList.toggle("hide", scrollTop > lastScrollTop);
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
};



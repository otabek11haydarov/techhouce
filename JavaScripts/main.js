

import { initCartMoreButtons } from "./cartmorebtn.js";
import { initProductPage } from "./Product.js";
import { initCartPage } from "./cart.js";
import { initSearchAutocomplete } from "./search.js";
import {initFilters} from "./filter.js";
import {initHeatFavorites} from "./heartclicker.js";
import {initFavoritesPage} from "./favorite.js";
import {initShopNowButton} from "./shop.js";
import {initHeaderScrollHide} from "./headereffect.js"

document.addEventListener("DOMContentLoaded", () => {
    initCartMoreButtons();
    initProductPage();
    initCartPage();
    initSearchAutocomplete();
    initFilters();
    initHeatFavorites();
    initFavoritesPage();
    initShopNowButton();
    initHeaderScrollHide();
});




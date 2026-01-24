import { initCartMoreButtons } from "./cartmorebtn.js";
import { initProductPage } from "./Product.js";
import { initCartPage } from "./cart.js";
import { initSearchAutocomplete } from "./search.js";
import { initFilters } from "./filter.js";
import { initHeatFavorites } from "./heartclicker.js";

import { initShopNowButton } from "./shop.js";
import { initHeaderScrollHide } from "./headereffect.js";
import {initCategoryNavigation} from "./categoriya.js";
import {initLoyaltyButton} from "./membership.js";
import {initSendEmail} from "./email.js";


document.addEventListener("DOMContentLoaded", () => {
    initCartMoreButtons();
    initProductPage();
    initCartPage();
    initSearchAutocomplete();
    initFilters();
    initHeatFavorites();
    initShopNowButton();
    initHeaderScrollHide();
    initCategoryNavigation();
    initLoyaltyButton();
    initSendEmail();

    
});



document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("filterToggle");
    const closeBtn = document.getElementById("closeFilter");
    const filters = document.getElementById("filters");

    toggleBtn.addEventListener("click", () => {
        filters.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        filters.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const categoryItems = document.querySelectorAll(".filter-box ul li");
    const priceSelect = document.querySelector(".filter-box select");
    const products = document.querySelectorAll(".main-card");

    function getProductCategory(card) {
        const name = card.querySelector(".product-name").textContent.toLowerCase();

        if (name.includes("fridge")) return "kitchen appliance";
        if (name.includes("dishwasher")) return "kitchen appliance";
        if (name.includes("tv")) return "personal care";
        if (name.includes("vacuum")) return "cleaning appliance";
        if (name.includes("micro")) return "kitchen appliance";

        return "other";
    }

    function getProductPrice(card) {
        const priceText = card.querySelector(".product-cost").textContent.replace(/[^0-9]/g, "");
        return Number(priceText);
    }

    function filterProducts() {
        const activeCategory = document.querySelector(".filter-box ul li.active")?.textContent.toLowerCase();
        const priceValue = priceSelect.value;

        products.forEach(card => {
            let show = true;

            const productCategory = getProductCategory(card);
            const productPrice = getProductPrice(card);

            if (activeCategory && activeCategory !== "all categories") {
                if (!productCategory.includes(activeCategory.toLowerCase())) {
                    show = false;
                }
            }

            if (priceValue !== "All Prices") {
                if (priceValue === "$50-$100" && (productPrice < 50 || productPrice > 100)) show = false;
                if (priceValue === "$100-$300" && (productPrice < 100 || productPrice > 300)) show = false;
                if (priceValue === "$300-$500" && (productPrice < 300 || productPrice > 500)) show = false;
                if (priceValue === "$500-$1000" && (productPrice < 500 || productPrice > 1000)) show = false;
                if (priceValue === "More $1000" && productPrice <= 1000) show = false;
            }

            card.style.display = show ? "block" : "none";
        });
    }

    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            categoryItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            filterProducts();
        });
    });

    priceSelect.addEventListener("change", filterProducts);
});

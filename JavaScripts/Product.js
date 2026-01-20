export function initProductPage() {
    // Product page
    const titleEl = document.querySelector(".product-title");
    if (!titleEl) return;

    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!product) return;

    // Basic info
    titleEl.textContent = product.name;

    const priceStrong = document.querySelector(".price strong");
    if (priceStrong) {
        priceStrong.textContent = `$${product.price}`;
    }

    const imgEl = document.querySelector(".product-image img");
    if (imgEl) {
        imgEl.src = product.image;
        imgEl.alt = product.name;
    }

    const categoryEl = document.querySelector(".product-category");
    if (categoryEl) {
        categoryEl.textContent = product.category;
    }

    const descEl = document.querySelector(".description p");
    if (descEl) {
        descEl.textContent = product.description;
    }

    // Brand
    const brandImg = document.querySelector(".product-brand");
    const brandRow = document.querySelector(".brand-row");

    if (brandImg && product.brand) {
        brandImg.src = product.brand;
    } else if (brandRow) {
        brandRow.style.display = "none";
    }

    // Details (brand style rows)
    const detailsList = document.getElementById("detailsList");

    if (detailsList) {
        const details = [
            { label: "Height", value: product.height },
            { label: "Width", value: product.width },
            { label: "Weight", value: product.weight },
            { label: "Power", value: product.power }
        ];

        detailsList.innerHTML = "";

        details.forEach(item => {
            if (!item.value) return;

            detailsList.insertAdjacentHTML("beforeend", `
                <div class="detail-row">
                    <span class="detail-label">${item.label}</span>
                    <span class="detail-line"></span>
                    <span class="detail-value">${item.value}</span>
                </div>
            `);
        });
    }

    // Rating
    const stars = document.querySelectorAll("#stars i");
    const ratingValue = document.querySelector(".rating-value");

    let rating = Number(product.star);
    if (Number.isNaN(rating)) rating = 0;

    rating = Math.max(0, Math.min(5, rating));
    ratingValue.textContent = rating.toFixed(1);

    stars.forEach((star, index) => {
        if (index < Math.round(rating)) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });


    // Stock
    const stockEl = document.querySelector(".product-stock");
    const addBtn = document.querySelector(".add-btn");

    if (stockEl) {
        if (product.stock > 0) {
            stockEl.textContent = `${product.stock} in stock`;
            stockEl.classList.remove("out");
        } else {
            stockEl.textContent = "Out of stock";
            stockEl.classList.add("out");
            if (addBtn) addBtn.disabled = true;
        }
    }

    // Old price
    const oldPriceEl = document.querySelector(".old-price");
    if (oldPriceEl) {
        if (product.oldPrice && product.oldPrice > product.price) {
            oldPriceEl.textContent = `$${product.oldPrice}`;
            oldPriceEl.style.display = "inline";
        } else {
            oldPriceEl.style.display = "none";
        }
    }

    // Save badge
    const saveBadge = document.querySelector(".save-badge");
    if (saveBadge) {
        if (product.save) {
            saveBadge.textContent = `Save $${product.save}`;
            saveBadge.style.display = "inline-block";
        } else {
            saveBadge.style.display = "none";
        }
    }

    // Cart
    addBtn?.addEventListener("click", () => {
        if (product.stock === 0) {
            alert("Out of stock!");
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const exists = cart.find(p => p.id === product.id);

        if (exists) {
            exists.qty++;
        } else {
            cart.push({ ...product, qty: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart");
    });
}

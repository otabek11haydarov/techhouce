export function initProductPage() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!product) return;

    // ===============================
    // BASIC
    // ===============================
    document.querySelector(".product-title").textContent = product.name;
    document.querySelector(".price strong").textContent = `$${product.price}`;
    document.querySelector(".product-image img").src = product.image;
    document.querySelector(".product-category").textContent = product.category;
    document.querySelector(".description p").textContent = product.description;

    // ===============================
    // BRAND
    // ===============================
    const brandImg = document.querySelector(".product-brand");
    if (brandImg && product.brand) {
        brandImg.src = product.brand;
    }

    // ===============================
    // STAR RATING (0–5 STAR FILL)
    // ===============================
    const starsFill = document.querySelector(".stars-fill");
    const ratingValue = document.querySelector(".rating-value");

    const rating = Math.max(0, Math.min(5, Number(product.star) || 0));
    const fillPercent = (rating / 5) * 100;

    if (starsFill) {
        starsFill.style.width = `${fillPercent}%`;
    }

    if (ratingValue) {
        ratingValue.textContent = rating.toFixed(1);
    }

    // ===============================
    // STOCK
    // ===============================
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

    // ===============================
    // OLD PRICE
    // ===============================
    const oldPriceEl = document.querySelector(".old-price");
    if (oldPriceEl) {
        if (product.oldPrice && product.oldPrice > product.price) {
            oldPriceEl.textContent = `$${product.oldPrice}`;
            oldPriceEl.style.display = "inline";
        } else {
            oldPriceEl.style.display = "none";
        }
    }

    // ===============================
    // SAVE BADGE
    // ===============================
    const saveBadge = document.querySelector(".save-badge");
    if (saveBadge) {
        if (product.save) {
            saveBadge.textContent = `Save $${product.save}`;
            saveBadge.style.display = "inline-block";
        } else {
            saveBadge.style.display = "none";
        }
    }

    // ===============================
    // BEST SELLER
    // ===============================
    if (product.bestSeller) {
        const badge = document.createElement("span");
        badge.className = "best-seller-badge";
        badge.innerHTML = `<i class="fa-solid fa-trophy"></i> Best Seller`;
        document.querySelector(".product-image")?.appendChild(badge);
    }

    // ===============================
    // ADD TO CART
    // ===============================
    addBtn?.addEventListener("click", () => {
        if (product.stock === 0) {
            alert("Out of stock!");
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
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

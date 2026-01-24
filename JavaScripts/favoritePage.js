import { getFavorites } from "./favorite.js";

export function initFavoritesPage() {
    const grid = document.getElementById("favoritesGrid");
    if (!grid) return;

    const favorites = getFavorites();

    if (favorites.length === 0) {
        grid.innerHTML = "<p>No favorite products yet.</p>";
        return;
    }

    grid.innerHTML = favorites.map(p => `
        <div class="main-card"
            data-id="${p.id}"
            data-name="${p.name}"
            data-price="${p.price}"
            data-image="${p.image}"
            data-category="${p.category}"
            data-description="${p.description}"
            data-oldprice="${p.oldPrice || ""}"
            data-save="${p.save || ""}">

            <p class="save-cost">${p.save ? `Save $${p.save}` : ""}</p>
            <i class="fa-solid fa-heart heart-icon active"></i>
            <img src="${p.image}" class="maincard_image">
            <h1 class="product-name">${p.name}</h1>
            <p class="product-description">${p.description}</p>
            <h3 class="product-cost">
                ${p.oldPrice ? `<span class="old-cost">$${p.oldPrice}</span>` : ""}
                $${p.price}
            </h3>
            <div class="card-buttons">
                <button class="more-btn">More</button>
                <button class="add-btn">Add to Cart</button>
            </div>
        </div>
    `).join("");
}

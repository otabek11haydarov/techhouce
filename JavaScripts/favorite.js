import { getProductFromCard } from "./productBuilder.js";

export function initFavoritesPage() {
    const grid = document.getElementById("favoritesGrid");
    if (!grid) return;

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
        grid.innerHTML = "<p>No favorite products yet.</p>";
        return;
    }

    const allCards = [...document.querySelectorAll(".main-card")];
    const products = allCards.map(getProductFromCard);

    const favoriteProducts = products.filter(p =>
        favorites.includes(String(p.id))
    );

    if (favoriteProducts.length === 0) {
        grid.innerHTML = "<p>No favorite products found.</p>";
        return;
    }

    favoriteProducts.forEach(p => {
        grid.insertAdjacentHTML("beforeend", `
            <div class="main-card" data-id="${p.id}">
                <i class="fa-solid fa-heart heart-icon active"></i>

                <img src="${p.image}" class="maincard_image">

                <h1 class="product-name">${p.name}</h1>
                <p class="product-description">${p.description}</p>
                <h3 class="product-cost">$${p.price}</h3>

                <div class="card-buttons">
                    <button class="more-btn">More</button>
                    <button class="add-btn">Add to Cart</button>
                </div>
            </div>
        `);
    });

    grid.addEventListener("click", e => {
        const heart = e.target.closest(".heart-icon");
        if (!heart) return;

        const card = heart.closest(".main-card");
        const id = String(card.dataset.id);

        favorites = favorites.filter(item => item !== id);
        localStorage.setItem("favorites", JSON.stringify(favorites));

        card.remove();

        if (favorites.length === 0) {
            grid.innerHTML = "<p>No favorite products yet.</p>";
        }
    });
}

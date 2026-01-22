export function initHeatFavorites() {
    const hearts = document.querySelectorAll(".heart-icon");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    hearts.forEach(heart => {
        const card = heart.closest(".main-card");
        if (!card) return;

        const id = String(card.dataset.id);

        if (favorites.includes(id)) {
            heart.classList.add("active", "fa-solid");
            heart.classList.remove("fa-regular");
        }

        heart.addEventListener("click", () => {
            if (favorites.includes(id)) {
                favorites = favorites.filter(item => item !== id);
                heart.classList.remove("active", "fa-solid");
                heart.classList.add("fa-regular");
            } else {
                favorites.push(id);
                heart.classList.add("active", "fa-solid");
                heart.classList.remove("fa-regular");
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    });
}

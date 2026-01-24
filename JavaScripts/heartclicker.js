export function initHeatFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Sahifa yuklanganda holatni tiklash
    document.querySelectorAll(".main-card").forEach(card => {
        const id = String(card.dataset.id);
        const heart = card.querySelector(".heart-icon");
        if (!heart) return;

        if (favorites.includes(id)) {
            heart.classList.add("active", "fa-solid");
            heart.classList.remove("fa-regular");
            card.classList.add("favorite");
        }
    });

    // 🔥 EVENT DELEGATION (ENG MUHIM QISM)
    document.addEventListener("click", (e) => {
        const heart = e.target.closest(".heart-icon");
        if (!heart) return;

        const card = heart.closest(".main-card");
        if (!card) return;

        e.preventDefault();
        e.stopPropagation();

        const id = String(card.dataset.id);

        if (favorites.includes(id)) {
            // ❌ olib tashlash
            favorites = favorites.filter(item => item !== id);

            heart.classList.remove("active", "fa-solid");
            heart.classList.add("fa-regular");
            card.classList.remove("favorite");
        } else {
            // ✅ qo‘shish
            favorites.push(id);

            heart.classList.add("active", "fa-solid");
            heart.classList.remove("fa-regular");
            card.classList.add("favorite");
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
}

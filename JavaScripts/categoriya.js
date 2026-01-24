export function initCategoryNavigation() {
    const categoryMap = {
        "kitchen-card": "kitchen.html",
        "cleaning-card": "cleaning.html",
        "heatcool-card": "heatcool.html",
        "personal-card": "personal.html",
        "smart-card": "smart.html"
    };

    Object.keys(categoryMap).forEach(id => {
        const card = document.getElementById(id);
        if (!card) return;

        card.style.cursor = "pointer";

        card.addEventListener("click", () => {
            window.location.href = categoryMap[id];
        });
    });
}

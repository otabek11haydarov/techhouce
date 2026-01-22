export function initFilters() {
    const cards = document.querySelectorAll(".main-card");
    const categoryList = document.getElementById("categoryFilter");
    const priceSelect = document.getElementById("priceFilter");

    // Agar filter HTML yo‘q bo‘lsa — chiqib ket
    if (!cards.length || !categoryList || !priceSelect) {
        return;
    }

    const categoryItems = categoryList.querySelectorAll("li");

    let selectedCategory = "all";
    let selectedPrice = "all";

    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            categoryItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            selectedCategory = item.dataset.category || "all";
            applyFilters();
        });
    });

    priceSelect.addEventListener("change", () => {
        selectedPrice = priceSelect.value || "all";
        applyFilters();
    });

    function applyFilters() {
        cards.forEach(card => {
            const cardCategory = card.dataset.category || "";
            const price = Number(
                String(card.dataset.price || "0").replace(/[^\d.]/g, "")
            );

            const categoryMatch =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;

            let priceMatch = true;

            if (selectedPrice !== "all") {
                if (selectedPrice === "600+") {
                    priceMatch = price >= 600;
                } else {
                    const cleaned = selectedPrice.replace(/[^\d-]/g, "");
                    const [min, max] = cleaned.split("-").map(Number);

                    if (!isNaN(min) && !isNaN(max)) {
                        priceMatch = price >= min && price <= max;
                    }
                }
            }

            card.style.display =
                categoryMatch && priceMatch ? "block" : "none";
        });
    }
}

import { getProductFromCard } from "./productBuilder.js";

export function initSearchAutocomplete() {
    // Search
    const input = document.getElementById("searchInput");
    const dropdown = document.getElementById("searchDropdown");
    const productList = document.getElementById("productList");
    const categoryList = document.getElementById("categoryList");
    const searchWord = document.getElementById("searchWord");
    const clearBtn = document.getElementById("clearBtn");

    if (!input || !dropdown) return;

    const cards = [...document.querySelectorAll(".main-card")];
    const products = cards.map(getProductFromCard);

    // Input
    input.addEventListener("input", () => {
        const value = input.value.trim().toLowerCase();

        productList.innerHTML = "";
        categoryList.innerHTML = "";

        if (!value) {
            hide();
            return;
        }

        dropdown.style.display = "block";
        clearBtn.style.display = "block";
        if (searchWord) searchWord.textContent = value;

        const categories = new Set();

        // Products
        products.forEach(p => {
            if (
                p.name.toLowerCase().includes(value) ||
                p.category.toLowerCase().includes(value) ||
                p.description.toLowerCase().includes(value)
            ) {
                categories.add(p.category);

                productList.insertAdjacentHTML("beforeend", `
                    <div class="product-item" data-id="${p.id}">
                        <img src="${p.image}" alt="${p.name}">
                        <div>
                            <p><b>${highlight(p.name, value)}</b></p>
                            <p>$${p.price}</p>
                        </div>
                    </div>
                `);
            }
        });

        // Categories
        categories.forEach(cat => {
            categoryList.insertAdjacentHTML(
                "beforeend",
                `<li>${highlight(cat, value)}</li>`
            );
        });
    });

    // Click
    productList.addEventListener("click", e => {
        const item = e.target.closest(".product-item");
        if (!item) return;

        const id = item.dataset.id;
        const product = products.find(p => p.id === id);
        if (!product) return;

        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "Product.html";
    });

    // Clear
    clearBtn.addEventListener("click", () => {
        input.value = "";
        hide();
    });

    // Hide
    function hide() {
        dropdown.style.display = "none";
        clearBtn.style.display = "none";
    }
}

// Highlight
function highlight(text, value) {
    return text.replace(
        new RegExp(`(${value})`, "gi"),
        "<mark>$1</mark>"
    );
}

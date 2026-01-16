// ===============================
// PRODUCT BUILDER (UNIVERSAL)
// ===============================
function getProductFromCard(card) {
    return {
        id: card.dataset.id,
        name: card.dataset.name,
        price: Number(card.dataset.price),
        image: card.dataset.image,
        category: card.dataset.category,
        description: card.dataset.description,

        bestSeller: card.dataset.bestseller === "true",
        star: Number(card.dataset.star) || 0,
        stock: Number(card.dataset.stock) || 0,
        brand: card.dataset.brand || null,

        oldPrice: card.dataset.oldprice
            ? Number(card.dataset.oldprice)
            : null,

        save: card.dataset.save
            ? Number(card.dataset.save)
            : null
    };
}

// ===============================
// INIT FUNCTION
// ===============================
export function initCartMoreButtons() {

    document.addEventListener("click", e => {
        const card = e.target.closest(".main-card");
        if (!card) return;

        // ===============================
        // MORE BUTTON
        // ===============================
        if (e.target.classList.contains("more-btn")) {
            const product = getProductFromCard(card);

            localStorage.setItem(
                "selectedProduct",
                JSON.stringify(product)
            );

            window.location.href = "Product.html";
        }

        // ===============================
        // ADD TO CART BUTTON
        // ===============================
        if (e.target.classList.contains("add-btn")) {
            const product = {
                ...getProductFromCard(card),
                qty: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const exists = cart.find(p => p.id === product.id);

            if (exists) {
                exists.qty += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product added to cart!");
        }
    });

}

export function initCartPage() {
    const container = document.getElementById("cartItems");
    const subtotalEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("total");
    const shippingRadios = document.querySelectorAll('input[name="shipping"]');

    if (!container) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        container.innerHTML = "";
        let subtotal = 0;

        if (cart.length === 0) {
            container.innerHTML = "<p>Your cart is empty</p>";
            subtotalEl.textContent = "$0.00";
            totalEl.textContent = "$0.00";
            return;
        }

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;

            container.innerHTML += `
        <div class="item" data-price="${item.price}">
          <img src="${item.image}">
          <div class="info">
            <h3>${item.name}</h3>

            ${item.bestSeller ? `<span class="best-seller-badge">Best Seller</span>` : ""}
            ${item.save ? `<span class="save-cost">Save $${item.save}</span>` : ""}

            <div class="qty">
              <button class="minus" data-i="${index}">-</button>
              <span class="count">${item.qty}</span>
              <button class="plus" data-i="${index}">+</button>
            </div>
          </div>
          <span class="price">$${itemTotal}</span>
        </div>
      `;
        });

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        calculateTotal();
    }

    function calculateTotal() {
        let shipping = 0;
        shippingRadios.forEach(r => {
            if (r.checked) shipping = Number(r.value);
        });

        const subtotal = Number(subtotalEl.textContent.replace("$", ""));
        totalEl.textContent = `$${(subtotal + shipping).toFixed(2)}`;
    }

    container.addEventListener("click", e => {
        if (e.target.classList.contains("minus")) {
            const i = e.target.dataset.i;
            if (cart[i].qty > 1) cart[i].qty--;
            else cart.splice(i, 1);
        }

        if (e.target.classList.contains("plus")) {
            cart[e.target.dataset.i].qty++;
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    });

    shippingRadios.forEach(radio =>
        radio.addEventListener("change", calculateTotal)
    );

    // CHECKOUT
    const checkOutBtn = document.getElementById("checkOut");
    if (checkOutBtn) {
        checkOutBtn.addEventListener("click", () => {
            localStorage.setItem("checkoutStep", "2");
            window.location.href = "payment.html";
        });
    }

    renderCart();
}

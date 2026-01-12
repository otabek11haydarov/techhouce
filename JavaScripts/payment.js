document.addEventListener("DOMContentLoaded", function () {
    const step = localStorage.getItem("checkoutStep");

    if (step === "2") {
        const step2 = document.querySelector(".step-2");
        if (step2) {
            step2.classList.add("active");
        }
    }

    window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", function () {

    const summaryItems = document.querySelectorAll(".payment__summary-item");
    const subtotalEl = document.getElementById("paymentSubtotal");
    const totalEl = document.getElementById("paymentTotal");

    const SHIPPING_COST = 0;

    function updateTotals() {
        let subtotal = 0;

        summaryItems.forEach(item => {
            const price = Number(item.dataset.price);
            const countEl = item.querySelector(".qty-count");
            const priceEl = item.querySelector(".payment__summary-price");

            let count = Number(countEl.textContent);

            if (count <= 0) {
                item.style.display = "none";
                countEl.textContent = 0;
                return;
            } else {
                item.style.display = "grid";
            }

            const itemTotal = price * count;
            priceEl.textContent = `$${itemTotal.toFixed(2)}`;
            subtotal += itemTotal;
        });

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        totalEl.textContent = `$${(subtotal + SHIPPING_COST).toFixed(2)}`;
    }

    summaryItems.forEach(item => {
        const minusBtn = item.querySelector(".qty-minus");
        const plusBtn = item.querySelector(".qty-plus");
        const countEl = item.querySelector(".qty-count");

        minusBtn.addEventListener("click", () => {
            let count = Number(countEl.textContent);

            if (count > 0) {
                count--;
                countEl.textContent = count;
                updateTotals();
            }
        });

        plusBtn.addEventListener("click", () => {
            let count = Number(countEl.textContent);
            count++;
            countEl.textContent = count;
            updateTotals();
        });
    });

    updateTotals();
});

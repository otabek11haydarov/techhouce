
document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll('.item');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const shippingRadios = document.querySelectorAll('input[name="shipping"]');

    function calculateSubtotal() {
        let subtotal = 0;

        items.forEach(item => {
            const price = Number(item.dataset.price);
            const count = Number(item.querySelector('.count').textContent);
            const itemTotal = price * count;

            item.querySelector('.price').textContent = `$${itemTotal}`;
            subtotal += itemTotal;
        });

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        return subtotal;
    }

    function calculateTotal() {
        const subtotal = calculateSubtotal();
        let shipping = 0;

        shippingRadios.forEach(radio => {
            if (radio.checked) {
                shipping = Number(radio.value);
            }
        });

        totalEl.textContent = `$${(subtotal + shipping).toFixed(2)}`;
    }

    items.forEach(item => {
        const minus = item.querySelector('.minus');
        const plus = item.querySelector('.plus');
        const countEl = item.querySelector('.count');

        minus.addEventListener('click', () => {
            let count = Number(countEl.textContent);
            if (count > 1) {
                count--;
                countEl.textContent = count;
                calculateTotal();
            }
        });

        plus.addEventListener('click', () => {
            let count = Number(countEl.textContent);
            count++;
            countEl.textContent = count;
            calculateTotal();
        });
    });

    shippingRadios.forEach(radio => {
        radio.addEventListener('change', calculateTotal);
    });

    calculateTotal();



    const checkOutBtn = document.getElementById("checkOut");

    if (checkOutBtn) {
        checkOutBtn.addEventListener("click", function () {


            localStorage.setItem("checkoutStep", "2");


            window.location.href = "payment.html";
        });
    }

});


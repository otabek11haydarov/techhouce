const form = document.getElementById("orderForm");
const orderComplete = document.querySelector(".order-complete");

orderComplete.style.display = "none"; // boshida yashirin

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = [
        "fname", "lname", "phone", "email", "street", "country", "city", "state", "zip", "card", "date", "cvc"
    ];

    let valid = true;

    fields.forEach(id => {
        const el = document.getElementById(id);
        if (!el.value.trim()) {
            el.style.border = "2px solid red";
            valid = false;
        } else {
            el.style.border = "1px solid #ccc";
        }
    });

    const payChecked = document.querySelector('input[name="pay"]:checked');
    if (!payChecked) valid = false;

    if (valid) {
        // formni yashirish
        form.style.display = "none";

        // order complete sahifani ko‘rsatish
        orderComplete.style.display = "block";
    } else {
        alert("Please fill all required fields correctly!");
    }
});


// Purchase history tugmasi uchun
document.getElementById("order-history-btn").addEventListener("click", function () {
    alert("Redirecting to purchase history...");
});

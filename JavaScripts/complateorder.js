

document.addEventListener("DOMContentLoaded", function () {
    const historyBtn = document.getElementById("order-history-btn");

    if (historyBtn) {
        historyBtn.addEventListener("click", function () {
            window.location.href = "orders.html";
        });
    }
});


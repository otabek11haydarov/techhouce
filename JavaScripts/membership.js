export function initLoyaltyButton() {
    const loyaltyBtn = document.querySelector(".loyalty-btn");
    const subscribeBtn = document.querySelector(".subscribe-btn");

    if (!loyaltyBtn) return;

    loyaltyBtn.style.cursor = "pointer";

    loyaltyBtn.addEventListener("click", () => {
        window.location.href = "membership.html";
    });

    if (!subscribeBtn) return;

    subscribeBtn.style.cursor = "pointer";

    subscribeBtn.addEventListener("click", () => {
        window.location.href = "membership.html";
    });
}

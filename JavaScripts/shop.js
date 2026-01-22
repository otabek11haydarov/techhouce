export function initShopNowButton() {
    const shopNowBtn = document.getElementById("shopNow");
    if (!shopNowBtn) return;

    shopNowBtn.addEventListener("click", () => {
        window.location.href = "productspage.html";
    });
}

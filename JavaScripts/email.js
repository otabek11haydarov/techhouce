export function initSendEmail() {
    const sendBtn = document.querySelector(".send-btn");
    const emailInput = document.querySelector(".footer-email input");

    if (!sendBtn || !emailInput) return;

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const message = emailInput.value.trim();

        if (message === "") {
            alert("Please write a message before sending.");
            return;
        }

        const to = "nlidernomerr1@gmail.com";
        const subject = "Message from Tech House website";
        const body = encodeURIComponent(message);

        // EMAIL CLIENT OCHISH
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

        // Inputni tozalash
        emailInput.value = "";
    });
}

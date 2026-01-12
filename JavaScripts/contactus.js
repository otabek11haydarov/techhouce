

// Form validation

const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // 1️⃣ Gaps
    if (name === "" || email === "" || message === "") {
        messageBox.textContent = "Please fill in all required fields.";
        messageBox.style.color = "red";
        return;
    }

    // 2️⃣ Email 
    if (!email.includes("@")) {
        messageBox.textContent = "Please enter a valid email address.";
        messageBox.style.color = "red";
        return;
    }

    // Alerts
    messageBox.textContent = "Your message has been sent successfully!";
    messageBox.style.color = "green";

    form.reset();
});

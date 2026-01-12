

// form va pop up, validation
const form = document.getElementById("accountForm");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");

if (form && popup && popupMessage) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const displayName = document.getElementById("displayName").value.trim();
        const email = document.getElementById("email").value.trim();

        const oldPass = document.getElementById("oldPassword").value;
        const newPass = document.getElementById("newPassword").value;
        const repeatPass = document.getElementById("repeatPassword").value;

        if (!firstName || !lastName || !displayName || !email) {
            showPopup("Please fill in all required fields.");
            return;
        }

        if (!email.includes("@")) {
            showPopup("Please enter a valid email address.");
            return;
        }

        if (newPass || repeatPass || oldPass) {
            if (!oldPass) {
                showPopup("Please enter your old password.");
                return;
            }

            if (newPass.length < 6) {
                showPopup("New password must be at least 6 characters.");
                return;
            }

            if (newPass !== repeatPass) {
                showPopup("Passwords do not match.");
                return;
            }
        }

        showPopup("Account details updated successfully!");
        form.reset();
    });
}

function showPopup(text) {
    popupMessage.textContent = text;
    popup.style.display = "flex";
}

window.closePopup = function () {
    popup.style.display = "none";
};

// naviagtion
const dropdown = document.getElementById("accountDropdown");

if (dropdown) {
    dropdown.addEventListener("change", function () {
        const value = this.value;

        if (value === "logout") {
            alert("You have been logged out");
            window.location.href = "index.html";
        } else {
            window.location.href = value;
        }
    });
};

// Desktop navigation

const menuItems = document.querySelectorAll(".account-menu li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const text = item.textContent.trim();

        switch (text) {
            case "Account":
                window.location.href = "myaccount.html";
                break;

            case "Address":
                window.location.href = "address.html";
                break;

            case "Orders":
                window.location.href = "orders.html";
                break;

            case "Log Out":
                alert("You have been logged out");
                window.location.href = "index.html";
                break;
        }
    });
});
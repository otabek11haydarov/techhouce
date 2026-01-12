// Sticky header scrool distination
document.addEventListener("DOMContentLoaded", function () {


    const shopNowBtn = document.getElementById("shopNow");

    if (shopNowBtn) {
        shopNowBtn.addEventListener("click", function () {
            window.location.href = "productspage.html";
        });
    }


    let lastScrollTop = 0;
    const header = document.querySelector(".header-container");

    if (header) {
        window.addEventListener("scroll", () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // pastga scroll
                header.classList.add("hide");
            } else {
                // yuqoriga scroll
                header.classList.remove("hide");
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

});

// More button

document.addEventListener("DOMContentLoaded", function () {
    const moreButtons = document.querySelectorAll(".more-btn");

    moreButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            window.location.href = "Product.html";
        });
    });
});

// Add button

document.addEventListener("DOMContentLoaded", function () {

    const applyBtn = document.getElementById("payment__summary-apply");
    const placeOrderBtn = document.getElementById("place-order");

    if (applyBtn) {
        applyBtn.addEventListener("click", function () {
            window.location.href = "complateorder.html";
        });
    }

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener("click", function () {
            window.location.href = "complateorder.html";
        });
    }

});

// Homepage membership

document.addEventListener("DOMContentLoaded", function () {
    const loyaltyBtn = document.querySelector(".loyalty-btn");

    if (loyaltyBtn) {
        loyaltyBtn.addEventListener("click", function () {
            window.location.href = "membership.html";
        });
    }
})

// Footer membership btn

document.addEventListener("DOMContentLoaded", function () {
    const membershipBtn = document.getElementById("membership-btn");

    if (membershipBtn) {
        membershipBtn.addEventListener("click", function () {
            window.location.href = "membership.html";
        });
    }
})

// Footer subscribe btn

const subscribeBtn = document.querySelector(".subscribe-btn")

if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
        window.location.href = "membership.html";
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const addButtons = document.querySelectorAll(".add-btn");

    function showToast(message) {
        const toast = document.createElement("div");
        toast.textContent = message;

        toast.style.position = "fixed";
        toast.style.bottom = "30px";
        toast.style.left = "50%";
        toast.style.transform = "translateX(-50%)";
        toast.style.background = "#000";
        toast.style.color = "#fff";
        toast.style.padding = "12px 20px";
        toast.style.borderRadius = "8px";
        toast.style.fontSize = "14px";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s ease";

        document.body.appendChild(toast);

        setTimeout(() => (toast.style.opacity = "1"), 50);
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 300);
        }, 1200);
    }

    addButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            showToast("✅ Product added to cart!");
        });
    });

});

// Categoria section click

document.addEventListener("DOMContentLoaded", function () {
    const kitchenCard = document.getElementById("kitchen-card");
    const cleaningCard = document.getElementById("cleaning-card")
    const heatcoolCard = document.getElementById("heatcool-card")
    const personalCard = document.getElementById("personal-card")
    const smartCard = document.getElementById("smart-card")

    if (kitchenCard) {
        kitchenCard.addEventListener("click", function () {
            window.location.href = "kitchen.html";
        });
    }

    if (cleaningCard) {
        cleaningCard.addEventListener("click", function () {
            window.location.href = "cleaning.html";
        });
    }

    if (heatcoolCard) {
        heatcoolCard.addEventListener("click", function () {
            window.location.href = "heatcool.html";
        });
    }

    if (personalCard) {
        personalCard.addEventListener("click", function () {
            window.location.href = "personal.html";
        });
    }

    if (smartCard) {
        smartCard.addEventListener("click", function () {
            window.location.href = "smart.html";
        });
    }
});

// Footer write email section functions

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("write-email__placeholder");
    const sendBtn = document.getElementById("write-email__send-btn");

    if (sendBtn && emailInput) {
        sendBtn.addEventListener("click", function () {
            const emailValue = emailInput.value.trim();

            if (emailValue === "") {
                alert("Please enter your email");
                return;
            }

            localStorage.setItem("contactMessage", emailValue);
            window.location.href = "contactus.html";
        });
    }
});

// TYext of footer write email section show on contact us placeholder

document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("contact-placeholder");
    const savedMessage = localStorage.getItem("contactMessage");

    if (textarea && savedMessage) {
        textarea.value = savedMessage;
        localStorage.removeItem("contactMessage");
    }
});

// footer social icons

// Telegram

document.addEventListener("DOMContentLoaded", function () {

    const telegramIcon = document.getElementById("telegram-icon");
    const whatsappIcon = document.getElementById("whatsapp-icon");

    console.log("Telegram:", telegramIcon);
    console.log("WhatsApp:", whatsappIcon);

    if (telegramIcon) {
        telegramIcon.onclick = function () {
            window.open("https://t.me/techhouseinc", "_blank");
        };
    }

    if (whatsappIcon) {
        whatsappIcon.onclick = function () {
            window.open(
                "https://www.whatsapp.com/channel/0029VbBumTS6GcGETBW92a0n",
                "_blank"
            );
        };
    }

});







//  document.addEventListener("DOMContentLoaded", function () {

//     const cartItemsContainer = document.getElementById("cartItems");
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     if (cart.length === 0) {
//         cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
//         return;
//     }

//     cartItemsContainer.innerHTML = "";

//     cart.forEach((item, index) => {

//         const itemTotal = item.price * item.qty;

//         const cartItem = document.createElement("div");
//         cartItem.className = "item";

//         cartItem.innerHTML = `
//             <img src="${item.image}" alt="${item.name}">

//             <div class="info">
//                 <h3>${item.name}</h3>
//                 <p>Color: Black</p>

//                 <div class="qty">
//                     <button class="minus" data-index="${index}">-</button>
//                     <span class="count">${item.qty}</span>
//                     <button class="plus" data-index="${index}">+</button>
//                 </div>
//             </div>

//             <span class="price">$${itemTotal}</span>
//         `;

//         cartItemsContainer.appendChild(cartItem);
//     });

//     // PLUS / MINUS
//     cartItemsContainer.addEventListener("click", function (e) {
//         if (e.target.classList.contains("plus")) {
//             const i = e.target.dataset.index;
//             cart[i].qty += 1;
//         }

//         if (e.target.classList.contains("minus")) {
//             const i = e.target.dataset.index;
//             if (cart[i].qty > 1) {
//                 cart[i].qty -= 1;
//             }
//         }

//         localStorage.setItem("cart", JSON.stringify(cart));
//         location.reload();
//     });

// });

document.addEventListener("DOMContentLoaded", () => {

    function getUsers() {
        return JSON.parse(localStorage.getItem("users")) || [];
    }

    function setUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    function setCurrentUser(user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
    }

    // ===== REGISTER =====
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirm = document.getElementById("confirmPassword").value;

            if (!name || !email || !password || !confirm) {
                alert("Fill all fields");
                return;
            }

            if (password !== confirm) {
                alert("Passwords do not match");
                return;
            }

            const users = getUsers();

            if (users.some(u => u.email === email)) {
                alert("User already exists");
                return;
            }

            users.push({
                id: Date.now(),
                name,
                email,
                password
            });

            setUsers(users);
            alert("Registered successfully");
            window.location.href = "login.html";
        });
    }

    // ===== LOGIN =====
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const users = getUsers();

            const user = users.find(
                u => u.email === email && u.password === password
            );

            if (!user) {
                alert("Wrong email or password");
                return;
            }

            setCurrentUser(user);
            window.location.href = "myaccount.html";
        });
    }

});

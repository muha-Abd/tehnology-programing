const app = document.getElementById("app");

function generateFakeJWT(email) {
    return btoa(JSON.stringify({ email: email, time: Date.now() }));
}

function renderLogin() {
    app.innerHTML = `
        <h2>Вход</h2>
        <input id="email" placeholder="Email"><br><br>
        <input id="password" type="password" placeholder="Пароль"><br><br>
        <button id="loginBtn">Войти</button>
    `;

    document.getElementById("loginBtn").onclick = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) return alert("Введите данные");

        const token = generateFakeJWT(email);
        localStorage.setItem("token", token);

        renderDashboard();
    };
}

function renderDashboard() {
    const token = localStorage.getItem("token");
    const data = JSON.parse(atob(token));

    app.innerHTML = `
        <h2>Добро пожаловать, ${data.email}</h2>
        <button id="logoutBtn">Выход</button>
    `;

    document.getElementById("logoutBtn").onclick = () => {
        localStorage.removeItem("token");
        renderLogin();
    };
}

if (localStorage.getItem("token")) {
    renderDashboard();
} else {
    renderLogin();
}
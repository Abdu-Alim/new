const users = [
    { login: "Abdu-Alim", password: "123", name: "Абду-Алим" },
    { login: "Neo", password: "Anderson", name: "mr.Anderson" },
    { login: "powerbank", password: "20000mAh", name: "HOCO" },
    { login: "mne", password: "mne", name: "Мне" },
    { login: "Len", password: "len", name: "Лень" },
    { login: "pridumyval", password: "pridumivat", name: "Придумывать" },
    { login: "polzovatelei", password: "polzovatelei", name: "Пользователей" },
];

const form = document.getElementById("authForm");
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const enteredLogin = loginInput.value;
    const enteredPassword = passwordInput.value;

    const foundUser = users.find(user => user.login === enteredLogin && user.password === enteredPassword);

    if (foundUser) {
        message.textContent = `Привет, ${foundUser.name}! Авторизация успешна.`;
        message.style.color = "green";
    } else {
        message.textContent = "Неверный логин или пароль.";
        message.style.color = "red";
    }

    loginInput.value = "";
    passwordInput.value = "";
});
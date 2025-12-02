import { square } from "./utils.js";

const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", () => {
    const input = document.getElementById("numberInput").value;

    if (input === "") {
        document.getElementById("result").innerText = "Введите число!";
        return;
    }

    const num = Number(input);
    const result = square(num);

    document.getElementById("result").innerText = "Результат: " + result;
});
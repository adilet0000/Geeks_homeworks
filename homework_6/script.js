let inputNumber = document.querySelector(".number-input");
const btn = document.querySelector(".check-button");

const array = generateRandomNums();
document.querySelector(".condition").textContent = `Сколько будет ${array[0]} умножить на ${array[1]}`;

btn.addEventListener("click", () => showResult(inputNumber));
btn.addEventListener("dblclick", () => location.reload()); // location.reload() - метод, который перезапускает странницу*



function generateRandomNums() { 
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const ans = firstNum * secondNum;

    return [firstNum, secondNum, ans];
};


function showResult() {
    document.querySelector(".result").textContent = check(inputNumber.value, array[2]);
    document.querySelector(".check-button").textContent = "Ещё раз? (нажмите дважды)";
};


function check(inputNum, rightNum) {
    if (Number(inputNum) === rightNum) {
        return `Все верно! Ответ: ${rightNum}`;
    } else if (Number(inputNum) !== rightNum) {
        return `Неверно! Правильный ответ: ${rightNum}`;
    } else {
        return "ERROR";
    };
};

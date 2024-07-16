const height = document.querySelector(".growth-input")
const weight = document.querySelector(".weight-input")
const btn = document.querySelector(".index-button")


btn.addEventListener("click", () => bodyMassIndex(height, weight))


function bodyMassIndex(height, weight) {
    let indx = Math.round(weight.value / (height.value / 100) ** 2);
    // console.log(indx)

    let res = check(indx)
    // console.log(res);

    document.querySelector(".out").textContent = indx; // Для изменения текста внутри элемента можно использовать свойство textContent
    document.querySelector(".result").textContent = res;
}


function check(ix) {
    if (ix < 16) {
        return "Значительный дефицит массы тела";
    } else if (ix >= 16 && ix < 18.5 && ix < 1) {
        return "Дефицит массы тела";
    } else if (ix >= 18.5 && ix < 25) {
        return "Норма";
    } else if (ix >= 25 && ix < 30) {
        return "Лишний вес";
    } else if (ix >= 30 && ix < 35) {
        return "Ожирение первой степени";
    } else if (ix >= 35 && ix < 40) {
        return "Ожирение второй степени";
    } else if (ix >= 40) {
        return "Ожирение третьей степени";
    } else {
        return "ERROR";
    };
};

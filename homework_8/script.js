// чтобы очистить $app.innerHTML = "";
const $winter_btn = document.querySelector("#winter_btn");
const $spring_btn = document.querySelector("#spring_btn");
const $summer_btn = document.querySelector("#summer_btn");
const $autumn_btn = document.querySelector("#autumn_btn");

const $result = document.querySelector(".result");



$winter_btn.addEventListener("click", () => {
    $result.innerHTML = "";
    renderMonths(1);
});

$spring_btn.addEventListener("click", () => {
    $result.innerHTML = "";
    renderMonths(2);
});

$summer_btn.addEventListener("click", () => {
    $result.innerHTML = "";
    renderMonths(3);
});

$autumn_btn.addEventListener("click", () => {
    $result.innerHTML = "";
    renderMonths(4);
});

// не придумал как сделать нормально с циклом
function renderMonths(num) {
    if (num === 1) {
        const $month1 = Month("Декабрь", "rgb(10, 86, 185)");
        const $month2 = Month("Январь", "rgb(10, 86, 185)");
        const $month3 = Month("Февраль", "rgb(10, 86, 185)");
        $result.append($month1, $month2, $month3);
    } else if (num === 2) {
        const $month1 = Month("Март", "rgb(82, 153, 11)");
        const $month2 = Month("Апрель", "rgb(82, 153, 11)");
        const $month3 = Month("Май", "rgb(82, 153, 11)");
        $result.append($month1, $month2, $month3);
    } else if (num === 3) {
        const $month1 = Month("Июнь", "rgb(0, 204, 255)");
        const $month2 = Month("Июль", "rgb(0, 204, 255)");
        const $month3 = Month("Август", "rgb(0, 204, 255)");
        $result.append($month1, $month2, $month3);
    } else {
        const $month1 = Month("Сентябрь", "orange");
        const $month2 = Month("Октябрь", "orange");
        const $month3 = Month("Ноябрь", "orange");
        $result.append($month1, $month2, $month3);
    };
};

function Month(text, background) {
    const $month = document.createElement("button");
    $month.className = "res";
    $month.innerText = text;
    $month.style.background = background;
    $month.style.color = "white";
    return $month;
};
const $btn = document.querySelector(".btn");
const $container = document.querySelector(".random-nums");

$btn.addEventListener("click", () => renderNumbers());
$btn.addEventListener("dblclick", () => location.reload());

function renderNumbers() {
    for (let i = 0; i < 6; i++) {
        renderNum();
    };
};

function renderNum() {
    const $num = RandomNum();
    $container.append($num);
};

function RandomNum() {
    const $num = document.createElement("div");
    $num.className = "num";
    $num.textContent = Math.floor(Math.random() * 100);
    return $num;
};
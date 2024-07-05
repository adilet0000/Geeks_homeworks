// Написать программу "светофор": программа запрашивает у пользователя цвет в текстовом виде, и печатает в консоль действие согласно ПДД. Например: красный : стой! желтый : жди и т.д.
function trafficLight(color) {
    color = color.toLowerCase();
    switch(color) {
        case "красный":
            return "Стой!";
        case "зеленый":
            return "Езжай!";
        case "желтый":
            return "Тормози!";
        default:
            return "Такого цвета у светофора нет!";
    };
};
console.log(trafficLight(prompt("Выбери цвет светофора:")));

// Написать программу которая запрашивает число у пользователя и выводит название планеты солнечной системы по порядковому номеру. 
function numberOfThePlanet(num) {
    num = Number(num)
    switch(num) {
        case 1:
            return "Меркурий";
        case 2:
            return "Венера";
        case 3:
            return "Земля";
        case 4:
            return "Марс";
        case 5:
            return "Юпитер";
        case 6:
            return "Сатурн";
        case 7:
            return "Уран";
        case 8:
            return "Нептун";
        default:
            return "В Солнечной системе нет столько планет!";
    };
};
console.log(numberOfThePlanet(prompt("Выбери номер планеты:")));
// Меркурий Венера Земля Марс Юпитер Сатурн Уран Нептун
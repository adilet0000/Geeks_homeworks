// Написать функцию которая возвращает сколько раз в строке встречается определенный символ 
// (причем учесть буквы как верхнего так и нижнего регистра). Например: charCount(“Abrakadabra”, “a”) -> 5, charCount(“hello”, “z”) -> 0.
function charCount(text, letter) {
    let counter = 0;
    text = text.toLowerCase();
    letter = letter.toLowerCase();
    for (let i = 0; i <= text.length; i++) {
        text[i] === letter ? counter++ : counter;
    };
    return counter;
};
console.log(charCount("Abrakadabra", "a"));
console.log(charCount("hello", "z"));

// Homework
// Написать фунцию которая реализована в лалафо. Нужно прятать последние 2 цифры номера телефона. На сайте или в приложении можете посмотреть пример как это выглядит в объявлении. 
// Например: hidePhone("+996 555 123 123") → “+996 555 123 1xx”.
function hidePhone(pNumber) {
    pNumber = pNumber.split("");
    pNumber.splice(-2, 2, "x", "x");
    return pNumber.join("");
};
console.log(hidePhone("+996 555 123 123"));
console.log(hidePhone("+996 555 123 214 123"));
console.log(hidePhone("+996 555 123"));

// Написать функцию переворота строки. СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. Например:
// myReverse("123456789") -> "987654321". Погуглите как цикл запустить не с 1 до 10, а в обратную сторону с 10 до 1. Это и будет решением задачи.
function myReverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        reversed += str[i];
    };
    return reversed;
};
console.log(myReverse("123456789"));
console.log(myReverse("Adilet"));
console.log(myReverse("arraylength"));
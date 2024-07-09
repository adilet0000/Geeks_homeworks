// #1. запросить у пользователя число от 2 до 10 и с помощью цикла вывести таблицу умножения для этого числа в таком виде(я выбрал 4 для примера):
function multiplicationTable(num) {
    if (num > 10 || num < 2) {
        return "Ваше число не подходит по условию!";
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
        return "Цикл окончен."
    }
};

console.log(multiplicationTable(prompt()));

// #2. есть массив оценок по 100-бальной шкале [40, 55, 22, 89, 14, 78, 56, 47, 59], нужно используя цикл их перевести в 5-ти бальную систему. До 20 баллов это 1, до 40 баллов - это 2, до 60 баллов - это 3, до 80 баллов - это 4, до 100 баллов это - 5. В консоль вывести в таком виде:
let marks = [40, 55, 22, 89, 14, 78, 56, 47, 59];
function toFivePointSistem(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] < 20) {
            newArr[i] = 1;
        } else if(array[i] >= 20 && array[i] <= 40 ) {
            newArr[i] = 2;
        } else if(array[i] > 40 && array[i] <= 60 ) {
            newArr[i] = 3;
        } else if(array[i] > 60 && array[i] <= 80 ) {
            newArr[i] = 4;
        } else if(array[i] > 80 && array[i] <= 100 ) {
            newArr[i] = 5;
        } else {
            return "Таких оценок мы преобразовать не можем."
        };
        console.log(`${array[i]} баллов это ${newArr[i]}`);
    };
    return "Преобразование завершено!"
};
console.log(toFivePointSistem(marks));
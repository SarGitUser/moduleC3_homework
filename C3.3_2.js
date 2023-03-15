// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function selectStrInObj(str, obj) {
    console.log(`${str}: ` + `${obj[str]}`);  // ключ: значение
    return (str in obj);
}

const user = {
    name: "Ivan",
    surname: "Egorov",
    age: 22,
    city: "Moscow"
}

let result = selectStrInObj(['city'], user); // true, где "city: Moscow"
console.log(result); // true

console.log(selectStrInObj(['sur_name'], user)); // false, где "sur_name: undefined"

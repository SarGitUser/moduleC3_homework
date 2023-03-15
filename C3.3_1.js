// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

function logObject(us_obj) {
    for (let us_key in us_obj){
        if (us_obj.hasOwnProperty(us_key)) {
            console.log(`${us_key}: ` + `${us_obj[us_key]}`);  // ключ: значение
            //console.log(us_key, us_obj[us_key]);
        }
    }
}

const user = {
    name: "Ivan",
    surname: "Egorov",
    age: 22,
    city: "Moscow"
}

logObject(user);
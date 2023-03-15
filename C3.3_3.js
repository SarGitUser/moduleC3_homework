// Написать функцию, которая создает пустой объект, но без прототипа.

function createNullObj() {
    // способы создания пустого объекта (без прототипа) с выводом:
    //console.log({});  
    //console.log(new Object());
    //console.log(Object.create(null));
    
    //return {};    
    //return new Object();    
    return Object.create(null);    
}

let result = console.log(createNullObj());

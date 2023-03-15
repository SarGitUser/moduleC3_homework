// определим родительскую функцию-конструктор
function HomeHelper(product, country){
    this.product = product;
    this.country = country;
    this.isPlugged = false;
}

// зададим метод, которым определим прибор как включенный в розетку и 
// добавим страну производителя, если она указана
HomeHelper.prototype.plugIn = function(){
    alert(`\n\r ${this.product.toUpperCase()} is plugged!\n \
Manufacturer country: ${(this.country ? this.country : 'not specified')}`);
    this.isPlugged = true;
}

// метод, которым определим прибор как выключенный из розетки и 
// добавим страну производителя, если она указана
HomeHelper.prototype.unplug = function() {
    alert(`\n\r ${this.product} is unplugged!\n \
Manufacturer country: ${(this.country ? this.country : 'not specified')}`);
    this.isPlugged = false;
}

// зададим в функциях приборов собственные свойства и выставим каждому из них признак (вкл/выкл):

// Прибор 1: Вентилятор напольный
function FloorFan(product, country, color, weight, brand, power, functionality) {
    this.product = product;
    this.country = country;
    this.color = color;
    this.weight = weight;
    this.brand = brand;
    this.power = power;
    this.functionality = functionality;
    this.isPlugged = true;
}

// Прибор 2: Пылесос портативный
function VacuumCleaner(product, country, color, weight, brand, model, power, functionality) {
    this.product = product;
    this.country = country;
    this.color = color;
    this.weight = weight;
    this.brand = brand;
    this.power = power;
    this.model = model;
    this.functionality = functionality;
    this.isPlugged = false;
}

// создадим новый объект "Вентилятор напольный" и свяжем его собственные свойства со свойствами родителя
FloorFan.prototype = new HomeHelper();
// создадим новый объект "Пылесос портативный" и свяжем его собственные свойства со свойствами родителя
VacuumCleaner.prototype = new HomeHelper();

// создадим экземпляр прибора 1 с параметрами
const floor_fan = new FloorFan("Floor fan", "", "white",  2.7, "MONLAN", 50, "Ventilation");
// создадим экземпляр прибора 2 с параметрами
const vacuum_cleaner = new VacuumCleaner("Vacuum cleaner portable", "Germany", "black", 7.5, "PIONEER", "VC321C", 340, "dust cleaning");

// вызываем событие: отключить вентилятор из розетки
floor_fan.unplug();
// вызываем событие: включить пылесос в розетку
vacuum_cleaner.plugIn();

// результат:
console.log(vacuum_cleaner)
console.log(floor_fan)

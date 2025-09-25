class car{
    constructor(name, year, color){
        this.name = name;
        this.year = year;
        this.color = color;
    }
    manufacturer(){
        return `The car ${this.name} is manufactured in the year ${this.year} and its color is ${this.color}`;
    }
}
let car1 = new car("BMW", 2020, "Black");
let car2 = new car("Audi", 2021, "White");
// console.table([car1.manufacturer(), car2.manufacturer()]);
// console.table([car1, car2]);
console.log(car1)
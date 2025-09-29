// class car{
//     constructor(brand, model, year){
//         this._brand = brand;
//         this._model = model;
//         this._year = year;
//     }
//     get readme(){
//         return this._brand + ' ' + this._model + ' ' + this._year;
//     }
//     set setme(value){
//         this._brand = value;
//     }
// }



// let mycar = new car('ford', 'mustang', 2023);

// mycar.readme = 'BMW' //setter

// console.log(mycar.readme) //getter

class Car {
    constructor(brand, model, year) {
        this._brand = brand; // real storage
        this._model = model;
        this._year = year;
    }

    // Getter for model (to read it)
    get model() {
        return this._model;
    }

    // Setter for model (to change it)
    set model(value) {
        this._model = value;
    }

    // Extra: Get full info about the car
    get info() {
        return `${this._brand} ${this._model} ${this._year}`;
    }
}

// Create a car object
let myCar = new Car('Ford', 'Mustang', 2023);

// Read the model using getter
// console.log(myCar.model); // 👉 Mustang

// Change the model using setter
myCar.model = 'Explorer';

// Read the full car info
// console.log(myCar.info); // 👉 Ford Explorer 2023

console.log(myCar)
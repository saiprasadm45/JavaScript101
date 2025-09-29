class car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    get carname(){
        return this.brand + ' ' + this.model + ' ' + this.year;
    }
    set carname(value){
        this.brand = value;
    }
}

let mycar = new car('ford', 'mustang', 2023);

mycar.carname = 'BMW' //setter

console.log(mycar.carname) //getter
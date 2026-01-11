//the super keywords belongs to parent class
//the sub class can access the parent class properties and methods by using super keywords
// instanceof is a way to check whether an object is an instance of a particular class or not.

class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    whereami() {
        console.log('im inside animal i.e parent class')
    }
}

class info extends animal {
    constructor(name, sound, type) {
        super(name, sound);
        this.type = type;
    }

    readme() {
        console.log(`the ${this.name} is cute animal, it makes sound like ${this.sound}, and he lie in the category of ${this.type}`);
    }
    whereami() {
        super.whereami() //calling parent class method`
        console.log('im inside info i.e child class')
    }
}

let dog = new info("dog", "bark", 'domestic');
dog.readme();

console.log(dog instanceof info) //true
console.log(dog instanceof animal) //true because info is extending animal
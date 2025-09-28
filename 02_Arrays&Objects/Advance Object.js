let obj = {
    name: 'karna',
    hasloggedin: true,
    greeet: function () {
        if (this.hasloggedin) {
            console.log(`hello ${this.name}, welcome`)
        } else {
            console.log(`please log-in first`)

        }
    }

}

console.log(obj.greeet())

console.log(Object.getOwnPropertyDescriptor(obj, 'name')) //gives access to objects hidden power

const user = {}

Object.defineProperty(user, 'name', { //lwt us set our own permision for object onlyone property.
    value: 'alice',
    writable: false, // false means can't change
    enumerable: true, // false means can't shows up in loops/object.keys()
    configurable: false // false means can't be delate or reconfigured.
})


Object.defineProperties(user, {  //lwt us set our own permision for object all properties.
    age: {
        value: 'alice',
        writable: false,
        enumerable: true,
        configurable: false
    },
    greet: {
        value: function () {
            return `Hi, i'm ${this.name}`
        },
        writable: false,
        enumerable: true,
        configurable: false

    }
})

console.log(user.name)
//user.name = 'raj'; //wont work cause we deliberatly made writable false;
console.log(user.name)

console.log(Object.keys(user)) // object.keys return array, here it will be empty cause we did enumerable false.

// for(let [key, value] of  Object.entries(user)){
//     console.log(key, value)
// }

// Object.keys(user).forEach(key => {
//     console.log(key, user[key])
// })

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key} : ${value}`)
});

let result = user.greet()
console.log(result)
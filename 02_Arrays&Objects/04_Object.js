/* asks this to chatgpt 
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const result = new Person('suraj')
result.greet()
*/

const holder = [
  {
    name: 'satish',
    age: 22
  },
  {
    name: 'raj',
    age: 18
  } 
]
console.log(holder[0].name) //satish
console.log(holder[1].age)//18

console.log(holder[1].hasOwnProperty('age'))//returns has the object has this property or not, case sensative; name and Name both diffrent.

class users {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log(`hello ${this.name}, you are ${this.age} years old.`)
  }
}

const user1 = new users('rahul',23)
const user2 = new users('pratap',21)
const user3 = new users('sakshi',19)

console.table([user1,user2,user3])
user1.name = 'rohan'
console.table([user1,user2,user3, typeof user2])

const member1 = {
  name: 'rajnikant',
  age: 89,
  address: '11,mumbai'
}
const member2 = {
  email : 'sd@gmail.com',
  phone : 465655656525
}
const member3 = {
  class : '12th',
  school : 'ganeshvidhyalay'
}
let combined = Object.assign({}, member1, member2,member3)
console.log(combined);


//raname the keys =>
member1.umar = member1.age
delete member1.age;
console.log(member1)

const players = {
    name: 'm s dhoni',
    jearsy_no: '7'
}

const{name, jearsy_no} = players //destructuring.
console.log(name, typeof name)//m s dhoni, object

console.log(players.name, typeof players.name, typeof players) //m s dhoni , string, object

const person = {
  nam: "Ravi",
  age: 30,
  job: "Developer"
};

const{nam,job ,city = "bengluru"} = person //default values
console.log(nam,job,city)
const{ nam: nav} = person //renaming variables
console.log(nav)

let nestedobj = {
    name : "suraj",
    class : "fy-ba",
    age: 22,
    eudcation : {
        school : {
            primary : 'zpcps',
            secondary : "nutan",
            college : {
                hsc : 'yashwant',
                diploma : 'gramin',
                engineering : 'pes'
            }
        }
        
    }

}

const{eudcation:{school:{college:{engineering}}}} = nestedobj // destrucring the nested objects..
console.log(engineering)
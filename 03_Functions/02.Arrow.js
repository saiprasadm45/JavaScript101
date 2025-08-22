let vote = (age) => {
  //this is arrow function.
  return age >= 18 ? "can vote" : "can't vote";
};
console.log(vote(17));

let justmsg = (user) => console.log(user); //no need to return, only need inside { parenthisis }

console.log(justmsg("sai"));

console.log("---------"); //in node env == In global scope,  this refers to an empty object ({}), || in Browser == In global scope, this refers to the window object..



function dude(){
  console.log('inside dude')
  console.log(this) //global obj i.e window
}
  console.log(this) //global obj empty {}
  console.log(this.brand) // undefined, cause no .brand key associate with empty obj
  dude()

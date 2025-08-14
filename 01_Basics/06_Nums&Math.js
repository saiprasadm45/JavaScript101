const score = 400;
console.log(score);

const balancce = new Number(100); //anything made using new keywords is object.
console.log(balancce);

const TOstringconv = score.toString(); // convert a number into string
console.log(TOstringconv);
console.log(typeof TOstringconv);
console.log(score.toFixed(1)); //used for billing and at ecommerce works, gives fixed value by adding decimal point.

const otherNumber = 112.458;
console.log(otherNumber.toPrecision(3)); //gives precision value.

const hundreads = 1468938;
console.log(hundreads.toLocaleString("en-IN")); //used to get more readable values , /// for indian type use "en-IN".

/* Maths */

console.log(Math);
console.log(Math.abs(-5)); // to get absolute value, -value will become +value, but not vice-versa.
console.log(Math.round(7932.9)); //get roundup value if value >=5 then ceiling value else floor
console.log(Math.ceil(0.1)); //5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(81)); //square-root foind
console.log(Math.cbrt(27)) //cube-root found0
console.log(Math.max(7444, 74154, 15156, 54547984, 44454154, 14578, 454154, 5712, 4245)); //used to find maximum value.
console.log(Math.min(7444, 74154, 15156, 54547984, 44454154, 14578, 454154, 5712, 4245)); //used to find minimum value
console.log(Math.pow(2,3)) //find power

console.log(Math.floor(Math.random()*9)+1)


// famous formula if you want random number between range-> Math.floor(Math.random()*(Max-min+1) + min)

//eg if i want to generate a number between 5 to 25.
console.log(Math.floor(Math.random()*(25-5+1)+5))

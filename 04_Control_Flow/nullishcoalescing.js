/* The nullish coalescing operator (??) in JavaScript is a logical operator that 
 returns the right-hand operand when the left-hand operand is null or undefined,
 and otherwise returns the left-hand operand.*/

function clgdata(name){
    name = name ?? "guest"
    console.log(`hello ${name}`)
 }

 console.log(clgdata("raj"))

console.log(null ?? undefined ?? "suresh" ?? "raj") // here anything that is not null/undefinned, get print , her suresh is direct first after the nullish over.
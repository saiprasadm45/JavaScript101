//lexical scoping => a parent/outer function defined property has access to every fun defined and executed inside that parent/outer fun.
//lexical scoping => inner fun has access to outer fun's properties.
function outer(){
    let myname = 'suraj';
    function inner(){
        console.log("from inner1 ", myname)
        function inside_inner(){
            console.log('from inside_inner of inner1', myname)
        }
        inside_inner()
    }
    let myfun =  ()=>{
        console.log("from myfun arrow ->", myname)
    }
    inner()
    myfun()
}
outer()


//closure => a function along with its lexical scope is called closure.

function outer2(){
    let username = 'piyush';
    function inner2(){
        console.log("from inner2 ", username)
    }
    return inner2
}
let ans = outer2() //ans is a function which has access to its lexical scope.
ans() //calling the inner2 function which has access to its lexical scope.
var a=10;
function outer1(){
    var b=20;
    var x = function aa(){
        a++;
        b++;
        console.log(a);
        console.log(b);
    }   
    return x; 
}

var abc=outer1();
console.log(abc());
console.log("--------");
var abcd=outer1();
console.log(abcd());


function fn(){
    console.log("Cool..");
}
window.setTimeout(fn, 0);
console.log("cooling down");
console.log("cooling down");
console.log("cooling down");
console.log("cooling down");
console.log("cooling down");
console.log("cooling down");
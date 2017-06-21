
function abc(){
    var name = "ABD";
    if(name==="ABD"){
        var a='cool...!';
    }
    
    console.log(a);
    console.log(name);
 }


abc();

function showName(fn,ln){
    var yn = 'Your name: ';
    function name(){
        return yn+fn+" "+ln;
    }
    return name;
}
var x = showName("abc", "xyz");
console.log(x());


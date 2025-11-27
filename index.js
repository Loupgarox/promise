
document.getElementById("Action").addEventListener("click", function(){
    alert("Action button clicked!")
});

console.log("Hello World!");

let a = 0;

setTimeout( function() {
    a = 42;
} , 1000 );

console.log("Fin a =", a);

document.getElementById("Action").addEventListener("click", function(){
    alert("Action button clicked!")
});

console.log("Hello World!");

let a = 0;
for( let i = 0; i < 500000000; i++)
{
    a += i ;
}

console.log("Fin a =", a);
// let Add = document.getElementById("Add")
// let Minus = document.getElementById("Minus") 
// let Clear = document.getElementById("Clear")
let Output = document.getElementById("Output")
let ans = 0

function Add() {
    ans++
    Output.textContent = ans
}
function Minus() {
    if(ans>0){
        ans--
        Output.textContent = ans

    }
}
function Clear() {
    ans++
    Output.textContent = 0
}

console.log(ans);

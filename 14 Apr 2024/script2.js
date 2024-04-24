// console.log("script2 is running");
let testButton = document.getElementById("testButton");

let buttons = document.getElementsByTagName("button");
console.log(buttons);

function fun() {
    console.log("test button is clicked");
}

testButton.addEventListener("click", fun);

function calculate() {
    let exp = document.getElementById("exp");
    exp.value = eval(exp.value);
}
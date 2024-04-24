// console.log("Hi from app.js");

let count = 0;

let str = "Hello from JavaScript, This is a dynamic text!";
let countText = document.getElementById("someId");
countText.innerHTML = str;

function handleClick() {
    countText.innerHTML = "Button is clicked!";
}

function increment() {
    count = count+1;
    // console.log("increment is called "+count);
    let text = document.getElementById("countText");
    text.innerHTML = count;
}
function decrement() {
    count = count-1;
    // console.log("decrement is called "+count);
    let text = document.getElementById("countText");
    text.innerHTML = count;
}
function resetCount() {
    count = 0;
    let text = document.getElementById("countText");
    text.innerHTML = count;
}
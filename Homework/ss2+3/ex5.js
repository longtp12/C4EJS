// Q5
let x = parseInt(prompt("Nhập 1 số có 3 chũ số "))

let a = x/100;
let b = (x%100) / 10;
let c = (x%100) % 10;
console.log(`Tổng của các chữ số là ${parseInt(a) + parseInt(b) + c}`);


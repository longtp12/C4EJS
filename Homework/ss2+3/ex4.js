// Q4
let money = parseInt(prompt("Nhập số tiền của bạn"));

let a = money / 100000;
let b = (money - parseInt(a)*100000) / 50000;
let c = (b*50000 - parseInt(b)*50000) / 20000;
let d = (c*20000 - parseInt(c)*20000) / 10000;

console.log(`Số tiền đổi ra được ${parseInt(a)} tờ 100.000vnd ${parseInt(b)} tờ 50.000vnd ${parseInt(c)} tờ 20.000vnd và ${parseInt(d)} tờ 10.000vnd`);



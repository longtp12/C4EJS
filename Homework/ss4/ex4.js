let a = Number(prompt("Nhập số thứ 1"));
let b = Number(prompt("Nhập số thứ 2"));
let c = Number(prompt("Nhập số thứ 3"));

if(a>b && b>c){
    console.log(`Các số đã nhập theo thứ tự tăng dần ${c} ${b} ${a}`);
    
}
if(a>c && c>b){
    console.log(`Các số đã nhập theo thứ tự tăng dần ${b} ${c} ${a}`);
}
if(b>a && a>c){
    console.log(`Các số đã nhập theo thứ tự tăng dần ${c} ${a} ${b}`);
}
if(b>c && c>a){
    console.log(`Các số đã nhập theo thứ tự tăng dần ${a} ${c} ${b}`);
}
if(c>a && a>b){
    console.log(`Các số đã nhập theo thứ tự tăng dần ${b} ${a} ${c}`);
}
if(c>b && b>a){
    console.log(`Các số đã nhập theo thứ tự tăng dần ${a} ${b} ${c}`);
}

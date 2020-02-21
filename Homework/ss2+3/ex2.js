// Q2
let a = parseFloat(prompt("Nhập chiều dài hình chữ nhật"));
let b = parseFloat(prompt("Nhập chiều rộng hình chữ nhật"));

let P = 2*(a+b);
let S = a*b;

if(a>b){
    console.log(P);
    console.log(S);
    
}
else{
    alert("Chiều dài phải lớn hơn chiều rộng chứ!!!!!!!");
}

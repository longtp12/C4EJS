// for (let index = 1; index < 11; index++) {
// //    console.log("hello");
//    console.log(index++);

// }

// for (let i = 10; i > -1 ; i--) {
// console.log(i);

// }

// let m = Number(prompt("Nhap so dau tien"));
// let n = Number(prompt("Nhap so thu hai"));
// let a, b

// if (n >= m) {
// //   for (let index = m; index <= n; index++) {
// //     console.log(index);
// //   }
// a = m; b = n;
// } else {
// //   for (let index = n; index <= m; index++) {
// //     console.log(index);
// //   }
// }a = n; b = m;

// Nhập M: tính S = 0 + 1 + 2 +....+ M

// let M = parseInt(prompt("Nhap so M"));
// let S = 0;
// for (let i = 0; i <= M; i++) {
//   S = S + i;
// }
// console.log(S);

// tinh S = 0 + 2 + 4 +...+ M

// let M = parseInt(prompt("Nhap M"));
// let S = 0;
// for (let i = 0; i <= M; i+=2) {
//     S = S + i;

// }console.log(S);

// let M = parseInt(prompt("Nhap M"));
// let S = 0;
// for (let i = 1; i <= M; i += 2) {
//   S = S + i;
// }console.log(S);

// let M = parseFloat(prompt("Nhap M"));
// let S = 0;

// // for (let i = 1; i <= M; i++) {
// // S = S + 1 / i;
// // }
// // console.log(S);

// for (let i = 1; i <= M; i++) {
//   S = S + 1 / (M * (M + 1));
// }
// console.log(S);

// let M = Number(prompt("Nhap M"));
// let S = 0;
// for (let i = 1; i <= M; i++) {
//   let giaiThua = 1;
//   for (let j = 1; j <= i; j++) {
//     giaiThua = giaiThua * j;
//   }
//   S = S + giaiThua;
// }
// console.log(S);

// let s = 1;
// let giaiThua = 1;
// for (let i = 2; i <= M; i++) {
//    S = S + giaiThua;
//    giaiThua = giaiThua *i;
    
// }


// let n = Number(prompt("Nhap N"));
// while(n<8){
//     n = Number(prompt("Nhap lai N >= 8"))
// }
// console.log(n);


// let password = prompt("Nhap password");
// while(password.length < 8){
//     password = prompt('Pass qua ngan');

// }console.log(password);


// Nhập số chẵn >10 nhập sai nhập lại

// let a = parseInt(prompt("Nhap so chan lon hon 10"));
// while(a<=10 || a>10 && a%2!==0){
//     a = prompt("Nhap sai! Xin nhap lai");

// }console.log(a);

let pass = prompt("nhap mk");
while(!(pass.length >= 8 && pass.search("@") >=0)){
    pass = prompt("nhap lai mk");
}
console.log(pass);
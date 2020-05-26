// function helloworld() {
//   alert("hello from function");
// }
// Goi function
// helloworld()
// helloworld()
// helloworld()
// helloworld()

// Khai báo funtion sử dụng tham số

// function xinChao(userName) {
//     console.log(`Xin chao ${userName}`);

// }
// xinChao("Long");

// Tính tổng 2 số

// function tinhTong(a, b) {
//     console.log(a);
//     console.log(b);

//     let result = a + b;
//     console.log(result);
// }

// tinhTong(2,4,3);

// function tinhTong3(a1, a2) {
//     let s = a1 + a2;
//     return s;
// }

// let n = tinhTong3(5, 6);
// console.log(n);

// function tinhTongMang(arr) {
// //   if(typeof arr = "array"){
//   let s = 0;
//   for (let i = 0; i < arr.length; i++) {
//     s = s + arr[i];
//   }
//   return s;
// // }else{
// //     return 0;
// }

// let n = tinhTongMang([1,2,3,4,5]);
// console.log(n);



// Tính giai thừa
// function tinhGiaithua(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * tinhGiaithua(n - 1);
// }

// let gT = tinhGiaithua(6);
// console.log(gT);

// fibonacci
function fibonacci(n) {
    if(n === 1 || n === 2){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


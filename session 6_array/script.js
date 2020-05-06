// let arr = [1, 2, 3, 4, 5];

// let listNumbers = [1, 2, 3, 4, 5];

// let listNames = ["Quang", "Duy", "Tung"];

// console.log(arr);
// console.log(listNumbers);
// console.log(listNames);

// arr.push(10);
// console.dir(arr);
// arr.push(11, 12, 13, 14);
// console.table(arr);
// arr.unshift(20);
// console.dir(arr);
// arr.unshift(21, 22, 23);
// console.table(arr);

// console.log(arr[1]);
// console.log(arr[14]);
// console.log(arr[-1]);

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);

// }
// console.log(arr);

// console.log(arr[1]);
// arr[10] = 500;
// arr.splice(1,3);
// console.log(arr);
// let a = arr.pop();
// let b = arr.shift();
// console.log(`a = ${a}, b = ${b}`);

// let arr = [];
// let length = 5;
// for (let i = 0; i < length; i++) {
//   let n = parseInt(prompt("nhap so vao mang"));
//   arr.push(n);
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i + 1}: ${arr[i]}`);
// }

// console.log("===== Tong ======");
// let S = 0;
// for (let i = 0; i < arr.length; i++) {
//   S = S + arr[i];
// }
// console.log(`Tong: ${S}`);
// console.log(`Tong trung binh: ${S / arr.length}`);

// let isExist = false;
// let N = prompt("Nhap 1 so");

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element.toLowerCase === N.toLowerCase){
//         isExist = true;
//         break;
//     }
// }

// if (isExist) {
//   console.log("co ton tai");
// } else {
//   console.log("khong ton tai");
// }

// let arr = [];
// let length = parseInt(prompt("nhap so sinh vien"));

// for (let i = 0; i < length; i++) {
//     let name = prompt("Nhap ten sinh vien");
//     console.log(`${i + 1}: ${arr[i]}`);

// }

// arr.sort(); // tăng dần
// arr.reverse(); // đảo ngược thứ tự => giảm dần

let arr = [6, 7, 3, 2, 9];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      //đổi chỗ
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);



// let arr = ["Nam", "Long", "Linh"];

// let N = prompt("nhập 1 tên");
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element.toLowerCase === N.toLowerCase){
//         console.log(N);
        
//     }

//     }
    
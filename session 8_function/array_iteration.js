// let arr = [2, 3, 5, 7, 9, 3, 2, 6, 1];

// let r1 = arr.findIndex(function (v, i, a) {
// //   console.log(`v = ${v}`);
// //   console.log(`i = ${i}`);
// //   console.log(a);

// //   return v > 4;
// });

// // console.log(r1);


// // let r2 = arr.filter(function (v, i, a) {
// //     console.log(`v = ${v}`);
// //     console.log(`i = ${i}`);
// //     console.log(a);
  
// //     return v > 4;
// //   });
// //   console.log(r2);
  
// //   let r4 = arr.every(function(v){
// //       return v % 2 === 0;
// //   })

// //   console.log(r4);
  

//   let r5 = arr.some(function(v){
//     return v % 2 === 0;
// })

// console.log(r5);

// 1. tìm ra 1 dt trg khoảng gia 10 - 12tr
// 2. tìm ra các dt của samsung
// 3. tìm ra dt có giá >12tr
// 4. tìm ra dt có chứa chữ "a"
// 5. tìm đt apple giá <23tr 



let listPhone = [
    {
      name: 'Galaxy Note',
      price: 10e6,
      brand: 'Samsung'
    },
    {
      name: 'Xperia 1',
      price: 11e6,
      brand: 'Sony'
    },
    {
      name: 'iPhone 11',
      price: 12e6,
      brand: 'Apple'
    },
  ];


// let r1 = listPhone.find(function(v){
//     console.log(v);
//     return v.price > 10e6 && v.price < 12e6;
// })
// console.log(r1);

// let r2 = listPhone.filter(function(v){
//     return v.brand.toLowerCase() === "samsung";
// })
// console.log(r2);

// let r3 = listPhone.filter(function(v){
//     return v.price > 12e6;
// })
// console.log(r3);

let r4 = listPhone.filter(function(v){
    return v.name.search("a") >= 0
})
console.log(r4);


























// let myInfo = {
//     "Name": "Long",
//     "Age": 19,
//     "country": "Vietnam",
// }
// // console.log(myInfo);
// myInfo['Phone'] = 123456789;
// myInfo.School = "BK";
// delete myInfo.Name;

// for (const key in myInfo) {
//     if (myInfo.hasOwnProperty(key)) {
//         const element = myInfo[key];
//         console.log(key +": "+ element);

//     }
// }

// Khai báo 1 object, chứa thông tin 1 điện thoại:
// chứa tên, giá, hãng sx
// 1. in thông tin dt ra màn hình
// 2. cho người dùng nhập thêm key-value của đt này
// 3. cho user sửa 1 value
// 4. nhập 1 key, xóa thông tin này trg đt

// let phone = {
//   Model: "Iphone",
//   Brand: "Apple",
//   Price: 1000
// };
// let N = prompt("Nhập key muốn sửa");
// while (!phone.hasOwnProperty(N)) {
//   N = prompt("Nhập key muốn sửa");
// }
// phone[N] = prompt("Nhập value");
// // phone["releaseYear"] = Number(prompt("Nhập năm sản xuất"));

// for (const key in phone) {
//   if (phone.hasOwnProperty(key)) {
//     const element = phone[key];
//     console.log(key + ": " + element);
//   }
// }

// let removeKey = prompt("Bạn muốn xóa gì?");
// while (!phone.hasOwnProperty(removeKey)) {
//     removeKey = prompt("Bạn muốn xóa gì?");

// }
// delete phone[removeKey];

// console.log("==========Xóa thành công=============");

// for (const key in phone) {
//     if (phone.hasOwnProperty(key)) {
//       const element = phone[key];
//       console.log(key + ": " + element);
//     }
//   }

// II. Khai báo 1 mảng chứa thông tin 3 đt, mỗi đt gồm:
// tên, giá, hãng sx
// 1. in ds đt ra màn hình (không sử dụng log mảng và log object)
// 2. cho ngdung thêm 1 đt mới vào mảng, bằng cách cho ngdung nhập tên, giá, hãng rồi thêm đt mới này vào mảng
// 3. ngdung nhập stt và key muốn sửa, cho người dùng sửa thông tin của đt có stt đó
// 4. nhập stt, xóa đt có stt đó
// 5. Nhập 1 tên đt, tìm đt có tên đó (ko phân biệt hoa thường)
// 6. Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)

let listPhone = [
  {
    Model: "Iphone",
    Brand: "Apple",
    Price: 1000
  },
  {
    Model: "Ipad",
    Brand: "Apple",
    Price: 1500
  },
  {
    Model: "Ipod",
    Brand: "Apple",
    Price: 500
  }
];

for (let i = 0; i < listPhone.length; i++) {
  const phone = listPhone[i];
  console.log(`${i + 1}: `);
  for (const key in phone) {
    const value = phone[key];
    console.log(key +': '+ value);
    
  }
}

// let newPhoneModel = prompt("Tên đth mới");
// let newPhoneBrand = prompt("Hãng đth mới");
// let newPhonePrice = prompt("Giá đth mới");

// let newPhone = {
//     Model: newPhoneModel,
//     Brand: newPhoneBrand,
//     Price: newPhonePrice,
// };
// listPhone.push(newPhone);

// console.log("=============Thêm thành công=============");

// for (let i = 0; i < listPhone.length; i++) {
//     const phone = listPhone[i];
//     console.log(`${i + 1}: `);
//     for (const key in phone) {
//       const val  ue = phone[key];
//       console.log(key +': '+ value);
      
//     }
//   }


// let N = parseInt(prompt("Nhập stt điện thoại muốn sửa"));
// let changeKey = prompt("Nhập key muốn sửa");
// while (!listPhone[N-1].hasOwnProperty(changeKey)) {
//   changeKey = prompt("Nhập key muốn sửa");
// }
// // changeKey = prompt("Nhập thông tin muốn sửa");
// listPhone[N-1][changeKey] = prompt("Nhập thông tin muốn sửa");
// console.log("=========Sửa thành công===========");

// for (let i = 0; i < listPhone.length; i++) {
//   const phone = listPhone[i];
//   console.log(`${i + 1}: `);
//   for (const key in phone) {
//     const value = phone[key];
//     console.log(key +': '+ value);
    
//   }
// }

// console.log("=======Xóa thành công========");

// let N = parseInt(prompt("Nhập stt điện thoại muốn xóa"));
// listPhone.splice(N-1,1);


// for (let i = 0; i < listPhone.length; i++) {
//   const phone = listPhone[i];
//   console.log(`${i + 1}: `);
//   for (const key in phone) {
//     const value = phone[key];
//     console.log(key +': '+ value);
    
//   }
// }




/* Lấy dữ liệu từ trang thegioididong.com
Chọn khoảng 5 đt, lấy thông tin gồm:
Tên - Hãng - Giá - Ảnh - Đường link đến chi tiết đt
I. Hiện thị theo bảng danh sách đt này theo mẫu:
    1. Mặc định
    2. Danh sách được filter theo 1 hãng
    3. Danh sách được fitler theo 1 khoảng giá (VD: từ 10 - 20 triệu)
    4. Danh sách được sắp xếp theo tên, hãng, giá
II. Khi click vào đường link, mở ra tab mới đến trang chi tiết đt.
*/

let listPhones = [
  {
    id: 1,
    name: "iPhone 8 Plus 64GB",
    brand: "Apple",
    price: 15e6,
    img:
      "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png",
    detail: "https://www.thegioididong.com/dtdd/iphone-8-plus",
  },
  {
    id: 2,
    name: "Samsung Galaxy A71",
    brand: "Samsung",
    price: 10e6,
    img:
      "https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-400x460-400x460-1-400x460.png",
    detail: "https://www.thegioididong.com/dtdd/samsung-galaxy-a71",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 8",
    brand: "Xiaomi",
    price: 479e4,
    img:
      "https://cdn.tgdd.vn/Products/Images/42/212374/xiaomi-redmi-note-8-128gb-black-400x460.png",
    detail: "thegioididong.com/dtdd/xiaomi-redmi-note-8-128gb",
  },
  {
    id: 4,
    name: "Samsung Galaxy Fold",
    brand: "Samsung",
    price: 50e6,
    img:
      "https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x460.png",
    detail: "thegioididong.com/dtdd/samsung-galaxy-fold",
  },
  {
    id: 5,
    name: "iPhone Xs Max 256GB",
    brand: "Apple",
    price: 30490e3,
    img:
      "https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x460.png",
    detail: "https://www.thegioididong.com/dtdd/iphone-xs-max-256gb",
  },
];

function display() {
  let phoneTable = document.getElementById("phones");
  for (let i = 0; i < listPhones.length; i++) {
    let html = `
                <tr>
                    <td>${listPhones[i].name}</td>
                    <td>${listPhones[i].brand}</td>
                    <td>${listPhones[i].price}</td>
                    <td><img src="${listPhones[i].img}" width='100'></td>
                    <td><button onclick="showDetail(${listPhones[i].id})">Detail</button></td>
                </tr>
                `;
    phoneTable.innerHTML += html;
  }
}
display(); 

function filter() {
  let phoneTable = document.getElementById("phones");
  phoneTable.innerHTML = "";
  let filterBrand = document.getElementById("filter-brand").value;
  let phoneBrand = listPhones.filter(function (phone) {
    return phone.brand.toLowerCase().includes(filterBrand.toLowerCase());
  });
  // console.log(phoneBrand);
  
  if (filterBrand === '') {
    display();
  } else {
    for (let i = 0; i < phoneBrand.length; i++) {
      let html = `
                <tr>
                    <td>${phoneBrand[i].name}</td>
                    <td>${phoneBrand[i].brand}</td>
                    <td>${phoneBrand[i].price}</td>
                    <td><img src="${phoneBrand[i].img}" width='100'></td>
                    <td><button onclick="showDetail(${listPhones[i].id})">Detail</button></td>
                </tr>
                `;
      phoneTable.innerHTML += html;
    }
  }
}

function filterPress(e) {
  if (e.key === "Enter") {
    filter();
  }
}



// localStorage.setItem('phone',JSON.stringify(listPhones));
  
function showDetail(id){
  
  // 1: save productID selected
  localStorage.setItem('selectedProductId', id);
  localStorage.setItem('products', JSON.stringify(listPhones));
  // 2: redirect
  window.location.href = 'detail.html'
}
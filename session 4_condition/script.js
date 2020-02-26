// cú pháp
// if (điều kiện) {

// code thực thi

// }

// Nhập vào 1 số nếu số ấy lớn hơn 8 là đúng

// let number = Number(prompt("Nhap 1 so"));

// if(number > 8){
//     console.log("lon hon 8");

// }
// if(number < 8){
//     console.log("nho hon 8");

// }
// if(number ==  8){
//     console.log("bang 8");

// }

//nhap 1 so kiem tra so chan hay le

// let number = Number(prompt("Nhap 1 so"));

// if(number%2===0){
//     console.log("so chan");

// }
// else{
//     console.log("so le");

// }

// kiem tra nam nhuan

// let year = parseInt(prompt("Nhap nam"));
// if((year%4===0&&year%100!==0)||(year%100===0&&year%400===0)){
//     console.log("nam nhuan");

// }
// else{
//     console.log("khong phai nam nhuan");

// }

// cu phap day du
// if(dk1){
// code1
// }
// else if(dk2){
// code2
// }

// Nhap vao 1 thang in ra so ngay cua thang do

let month = parseInt(prompt("Nhap thang"));

// if((month<8)%2!==0 ){
//     console.log("thang co 31 ngay");

// }

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31");

    break;
  case 2:
    console.log("28 hoac 29");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30");

  default:
    break;
}

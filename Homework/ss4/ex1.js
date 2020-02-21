// Q1
let year = parseInt(prompt("Nhập năm cần kiểm tra"));
if(year%4===0 && year%100!==0 || year%400===0 ){
    console.log("Năm có 366 ngày");
    
}
else{
    console.log("Năm có 365 ngày");
    
}







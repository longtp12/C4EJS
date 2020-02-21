// Q2
let year = parseInt(prompt("Nhập năm cần kiểm tra"));
let month = parseInt(prompt("Nhập tháng cần kiểm tra"));
if(month>12 || month<1){
    console.log("1 năm có 12 tháng thôi!!!!");
    
}
if(year%4===0 && year%100!==0 || year%400===0 ){
    
    if(month===1 || month===3 || month===5 || month===7 ||month===8 || month===10 || month===12 ){
        console.log("Tháng có 31 ngày");
        
    }
    if(month===2){
        console.log("Tháng có 29 ngày");
        
    }
    if(month===4 || month===6 || month===9 || month===11){
        console.log("Tháng có 30 ngày");
        
    }
}
else{
    if(month===1 || month===3 || month===5 || month===7 ||month===8 || month===10 || month===12 ){
        console.log("Tháng có 31 ngày");
    }
    if(month===4 || month===6 || month===9 || month===11){
        console.log("Tháng có 30 ngày");
    }
    if(month===2){
        console.log("Tháng có 28 ngày");
        
    }
}

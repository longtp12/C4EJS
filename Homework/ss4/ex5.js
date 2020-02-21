let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));
let c = Number(prompt("Nhập số c"));

if(a+b>c && a+c>b && b+c>a){
    console.log("Tạo được 1 tam giác");
    
  if(a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2 ){
    console.log("Tạo được 1 tam giác vuông");
    
} if(a===b || a===c || b===c){
    console.log("Tạo được 1 tam giác cân");
    
} if(a===b && b===c){
    console.log("Tạo được 1 tam giác đều");
    
}}
else{
    console.log("Không tạo được tam giác"); 
}





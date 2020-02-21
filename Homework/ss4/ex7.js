let height = Number(prompt("Nhập chiều cao (m)"));
let weight = Number(prompt("Nhập cân nặng (kg)"));
let BMI = weight/(height**2);

if(BMI<18.5){
    console.log("Cân nặng thấp (gầy)");
    
}else if(BMI>=18.5 && BMI<=24.9){
    console.log("Bình thường");
    
}else if(BMI>=25 && BMI<29.9){
    console.log("Thừa cân");
    
}else if(BMI>=30 && BMI<=34.9){
    console.log("Béo phì độ I");
    
}else if(BMI>=35 && BMI<=39.9){
    console.log("Béo phì độ II");
    
}else if(BMI>=40){
    console.log("Béo phì độ III");
}
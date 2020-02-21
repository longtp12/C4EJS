let bill = Number(prompt("Nhập số điện đã sử dụng"));

if(bill>=0 && bill<=50){
    let t1 = bill * 1.678;
    console.log(`Tiền điện phải trả cho ${bill}kWh là ${t1}vnd`);
    
}else if(bill>=51 && bill<=100){
    let t2 = 50*1.678 + (bill - 50)*1.734;1
    console.log(`Tiền điện phải trả cho ${bill}kWh là ${t2}vnd`);
}else if(bill>=101 && bill<=200){
    let t3 = 50*(1.678 + 1.734) + (bill - 100)*2.014;
    console.log(`Tiền điện phải trả cho ${bill}kWh là ${t3}vnd`);
}else if(bill>=201 && bill<=300){
    let t4 = 50*(1.678 + 1.734) + 100*2.014 + (bill - 200)*2.536;
    console.log(`Tiền điện phải trả cho ${bill}kWh là ${t4}vnd`);
}else if(bill>=301 && bill<=400){
    let t5 = 50*(1.678 + 1.734) + 100*(2.014 + 2.536) + (bill - 300)*2.834;
    console.log(`Tiền điện phải trả cho ${bill}kWh là ${t5}vnd`);
}else if(bill>=401){
    let t6 = 50*(1.678 + 1.734) + 100*(2.014 + 2.536 + 2.834) + (bill - 400)*2.927
    console.log(`Tiền điện phải trả cho ${bill}kWh là ${t6}vnd`);
}
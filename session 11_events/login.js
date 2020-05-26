function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

//   if (username === "") {
//     alert("enter username");
//     return;
//   }
//   if (password === "") {
//     alert("enter password");
//     return;
//   }

  if (username === "admin" && password === "123456") {
    alert("successful");
    window.location.href = 'file:///D:/Code/session%2011_events/index.html'
    return;
  }
  if(username === '' || password === ''){
  alert("invalid username or password");
  }
}

function submit(e){
    if(e.key === 'Enter'){
         login()
    
}}

let s = 'hello world';
let n = 10;
let b = true;
let arr = [1,2,3,4,5];
let o = {name:'Long', age:'20', school:'BK', };

console.log(JSON.stringify(o));
// console.log(o);

let stringify = '{"name":"Long","age":"20","school":"BK"}'

let object = JSON.parse(stringify);
console.log(object);

let person = {name:'Long', age:'20', school:'BK', };

// product.html
// Quá trình lưu vào localstorage
// sử dụng stringify
localStorage.setItem('person', JSON.stringify(person));

// detail.html
// quá trình parse dữ liệu
let personSelected = JSON.parse(localStorage.getItem('person'))
console.log(personSelected);


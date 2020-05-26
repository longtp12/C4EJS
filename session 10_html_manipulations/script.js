// console.dir(document.getElementById("title"));
// // console.dir(document.getElementById("title")).innerHTML;

// document.getElementById('title').innerHTML = "Welcome C4EJS";

let idTitle = document.getElementById("title");
idTitle.innerHTML = "Welcome C4EJS";

let classContent = document.getElementsByClassName("content");
console.dir(classContent);

document.getElementsByClassName("content")[1].innerHTML = "Welcome C4EJS";

for (let i = 0; i < classContent.length; i++) {
    const dom = classContent[i];
    dom.innerHTML = "welcome";
    
}

idTitle.style.color = 'green';
idTitle.style.backgroundColor = 'black';


// let listFoods = [
//     'phở',
//     'bún cá',
//     'mì tôm',
//     'cơm cuộn',
// ]

// let listImgs = [
//     `https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg`,
//     `https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg`,
//     `https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg`,
//     `https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg`,
// ]

// let ulFoods = document.getElementById("foods");
// ulFoods.innerHTML = "<li>Cơm rang</li>"

    let foodMenu = document.getElementById("foods")

// for (let i = 0; i<listFoods.length; i++) {
   
//     foodMenu.innerHTML += `<li>${listFoods[i]} <img alt='đây là bát phở' width='100' src='${listImgs[i]}'/></li>`
    
// }

let listFoodsAndImgs = [
    {
        food: 'phở',
        img: 'https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg',
        description: 'ngon',
        linkDetail: 'https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg'
    },
    {
        food: 'bún cá',
        img: 'https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg',
        description: 'ngon',
        linkDetail: 'https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg'

    },
    {
        food: 'mì tôm',
        img: 'https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg',
        description: 'ngon',
        linkDetail: 'https://monngonmoingay.com/wp-content/uploads/2019/03/pho-bo-bap-hoa-500.jpg'

    }
]

// for (let i = 0; i < listFoodsAndImgs.length; i++) {
//     const foodAndImgs = listFoodsAndImgs[i];
//     const food = foodAndImgs.food;
//     const img = foodAndImgs.img;
//     foodMenu.innerHTML += `<li>${food} <img src='${img}'/></li>`;
    
// }



for (let i = 0; i < listFoodsAndImgs.length; i++) {
    const foodAndImgs = listFoodsAndImgs[i];
    const food = foodAndImgs.food;
    const img = foodAndImgs.img;
    const des = foodAndImgs.description;
    const detail = foodAndImgs.linkDetail;

    let html = ` <tr>
                    <td>${i + 1}</td>
                    <td><img src='${img}' width="100"></td>
                    <td>${food}</td>
                    <td>${des}</td>
                    <td><a href="${detail}" target='_blank'>Details</a></td>
                </tr>`

    foodMenu.innerHTML += html
}




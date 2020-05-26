function welcome(){
    alert('welcome');
}

function changeColor(e){
    console.log(e.target);
    e.target.style.color = 'red';
}

function hiddenButton(e){
    console.log(e);
   
    //  e.target.style.display = "none";
    // e.target.remove();
}
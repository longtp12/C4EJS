let menu = [
    'Home',
    'About',
    'Rooms',
    'Dive Site',
    'Food',
    'News',
    'Contact',
]

let menuButton = document.getElementsByClassName("button");

for (let i = 0; i < menuButton.length && i < menu.length ; i++) {
    
    menuButton[i].innerHTML = menu[i];
    
}
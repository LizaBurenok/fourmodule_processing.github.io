let hiddenMenu = document.querySelector('.hidden_menu')
let hiddenTab = document.querySelector('.hidden_tab')

hiddenMenu.onclick = function(){
hiddenTab.classList.toggle('open');
}

let menu = document.querySelector('.navigation_container')
let navigationOpen = document.querySelector('.navigation')
let verticalScale = document.querySelector('.vertical_scale')

verticalScale.onclick = function(){
navigationOpen.classList.toggle('fullmenu');
verticalScale.style.transform = "translate(-400px, -30px)";
menu.style.transform = "translate(-200px, 200px)";
menu.style.transform = "scale(.7)";
}

let mobileBtn = document.querySelector('.circle')
let mobileMenu = document.querySelector('.navigation')

mobileBtn.onclick = function(){
    mobileMenu.classList.toggle('full');
    mobileMenu.style.transform = "translate(-30px, -700px)";
}

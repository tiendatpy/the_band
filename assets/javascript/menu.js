const header = document.getElementById('header')
const mobileMenu = document.getElementById('js-hambuger-menu')
const currentHeight = header.clientHeight;
// dong mo menu
mobileMenu.onclick = function () {
    if(header.clientHeight === currentHeight) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}
// an menu khi click vao
let menuItems = document.querySelectorAll('.nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}
// dong hien sub menu
const active = document.querySelector('.js-sub-menu')
var subMenu = document.querySelector('.subnav')
active.onclick = function () {
    subMenu.classList.toggle('active');
}


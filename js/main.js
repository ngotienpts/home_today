// show sub menu
var showSubMenu = document.querySelector(".sub-menu-block");
var subMenu = document.querySelector(".show-sub-menu");
var closeSubMenu = document.querySelector(".close-search");
subMenu.onclick = function() {
    showSubMenu.classList.add("open");
};
closeSubMenu.onclick = function() {
    if (showSubMenu.classList.contains("open")) {
        showSubMenu.classList.remove("open");
    }
};
// end show sub menu



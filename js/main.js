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

// show edit form
var closeEditForms = document.querySelectorAll('.close_edit');
var editForms = document.querySelectorAll('.js_click_edit');
if(closeEditForms){
    closeEditForms.forEach((el)=>{
        el.onclick = function(){
            if(!el.closest('.is_hide')){
                el.parentElement.classList.add('is_hide')
            }
        }
    }
    )
}

if(editForms){
    editForms.forEach((el)=>{
        el.onclick = function(){
            var showEdit = el.parentElement.querySelector('.box_edit_form');
            if(showEdit.classList.contains('is_hide')){
                showEdit.classList.remove('is_hide')
            }else {
                showEdit.classList.add('is_hide')
            }
        }
    })
}

// change avaater
var getImg = document.querySelector('.getFile');
getImg.onclick = function(){
    console.log(getImg.value);
}
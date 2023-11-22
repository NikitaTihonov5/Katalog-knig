let burger_btn = document.getElementById('burger_btn')
let menu_burger = document.querySelector('.menu_burger')

burger_btn.addEventListener('click', function(){
    if (menu_burger.style.display == 'none') {
        menu_burger.style.display = 'block'
    } else {
        menu_burger.style.display = 'none'
    }
})
let burger_btn = document.getElementById('burger_btn')
let menu_burger = document.querySelector('.menu_burger')

burger_btn.addEventListener('click', function(){
    if (menu_burger.style.display == 'none') {
        menu_burger.style.display = 'block'
    } else {
        menu_burger.style.display = 'none'
    }
})

let telephon = document.querySelector('.telephon')
let close_modal_conteiner = document.querySelector('#close_modal_conteiner')
let modal_conteiner = document.querySelector('.modal-conteiner')
let inputs = document.querySelector('.inputs')

telephon.addEventListener('click',function(){
    modal_conteiner.style.display = 'block'
    inputs.style.display = 'block'
})
close_modal_conteiner.addEventListener('click',function(){
    modal_conteiner.style.display = 'none'
    inputs.style.display = 'none'
})

let burgerBtn = document.querySelector('.navbar__nav--burger')
let modal = document.querySelector('.modal')
let burgerBtnLine = document.querySelector('.navbar__nav--burger')

burgerBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
    burgerBtnLine.classList.toggle('active')
})

let actionBtn = document.querySelector('.btn-send-action')
let actionBlock = document.querySelector('.action')

actionBtn.addEventListener('click', () => {
    actionBlock.classList.add('active')
})


var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
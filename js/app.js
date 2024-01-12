let burgerBtn = document.querySelector('.navbar__nav--burger');
let modal = document.querySelector('.modal');
let burgerBtnLine = document.querySelector('.navbar__nav--burger');

burgerBtn.addEventListener('click', () => {
    modal.classList.toggle('active');
    burgerBtnLine.classList.toggle('active');
})

let actionBtn = document.querySelector('.btn-send-action');
let actionBlock = document.querySelector('.action');

// actionBtn.addEventListener('click', () => {
//     actionBlock.classList.add('active')
// })

const sliderDropdownBtn = document.querySelectorAll('.slider__buttons-item.second');
const sliderDropdown = document.querySelectorAll('.slider__dropdown');

function checkActive(item) {
    if (item.classList.contains('active')) {
        item.style.minHeight = item.scrollHeight + 'px';
    } else {
        item.style.minHeight = '0';
    }
}

for (let i = 0; i < sliderDropdownBtn.length; i++) {
    sliderDropdownBtn[i].addEventListener('click', () => {
        sliderDropdown[i].classList.toggle('active');
        sliderDropdownBtn[i].classList.toggle('active')
        checkActive(sliderDropdown[i]);
    })
}


function removeActive() {
    for (let j = 0; j < sliderDropdownBtn.length; j++) {
        sliderDropdownBtn[j].classList.remove('active');
        sliderDropdown[j].classList.remove('active')
        checkActive(sliderDropdown[j]);
    }
};

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            removeActive();
        }
    }
});




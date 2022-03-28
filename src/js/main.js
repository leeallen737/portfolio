const hamburger = document.querySelector('.nav-right')
const slideMenu = document.querySelector('.side-navigation')




hamburger.addEventListener('click', () => {
    slideMenu.classList.toggle('open')
})

slideMenu.addEventListener('click', () => {
    slideMenu.classList.remove('open')
})

document.addEventListener("DOMContentLoaded", () => {
    slideMenu.classList.remove('open')
});


const slides = document.getElementsByClassName('slide')
const upButton = document.getElementById('bottone-su')
const downButton = document.getElementById('bottone-giu')

downButton.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active') && i != slides.length - 1) {
            slides[i].nextElementSibling.classList.add('active')
            slides[i].classList.remove('active')
            break
        } else if (slides[i].classList.contains('active') && i == slides.length - 1) {
            slides[0].classList.add('active')
            slides[i].classList.remove('active')
            break
        }
    }
})

upButton.addEventListener('click', function () {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active') && i != 0) {
            slides[i].previousElementSibling.classList.add('active')
            slides[i].classList.remove('active')
            break
        } else if (slides[i].classList.contains('active') && i == 0) {
            slides[slides.length - 1].classList.add('active')
            slides[i].classList.remove('active')
            break
        }
    }
})

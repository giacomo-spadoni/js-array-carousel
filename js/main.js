const slides = document.getElementsByClassName('slide')

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


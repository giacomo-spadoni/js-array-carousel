const slides = document.getElementsByClassName('slide')

for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')) {
        slides[i].nextElementSibling.classList.add('active')
        slides[i].classList.remove('active')
        break
    }
}


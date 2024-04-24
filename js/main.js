// creo le costanti per gli elementi HTML che mi serviranno
const slides = document.getElementsByClassName('slide')
const upButton = document.getElementById('bottone-su')
const downButton = document.getElementById('bottone-giu')

// creo l'evento per il bottone con la freccia verso il basso
downButton.addEventListener('click', function () {
    // inserisco il ciclo for per controllare le classi di tutte le immagini
    for (let i = 0; i < slides.length; i++) {
        // creo la condizione per switchare le immagini (tranne l'ultima)
        if (slides[i].classList.contains('active') && i != slides.length - 1) {
            slides[i].nextElementSibling.classList.add('active')
            slides[i].classList.remove('active')
            break
            // creo la condizione per switchare l'ultima immagine
        } else if (slides[i].classList.contains('active') && i == slides.length - 1) {
            slides[0].classList.add('active')
            slides[i].classList.remove('active')
            break
        }
    }
})
// creo l'evento per il bottone con la freccia versol'alto
upButton.addEventListener('click', function () {
    // inserisco il ciclo for per controllare le classi di tutte le immagini
    for (let i = 0; i < slides.length; i++) {
        // creo la condizione per switchare le immagini (tranne l'ultima)
        if (slides[i].classList.contains('active') && i != 0) {
            slides[i].previousElementSibling.classList.add('active')
            slides[i].classList.remove('active')
            break
            // creo la condizione per switchare la prima immagine
        } else if (slides[i].classList.contains('active') && i == 0) {
            slides[slides.length - 1].classList.add('active')
            slides[i].classList.remove('active')
            break
        }
    }
})

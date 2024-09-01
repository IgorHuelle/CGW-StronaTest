const ofertItems = document.querySelectorAll('.oferts-item')

for(let i = 0; i < ofertItems.length; i++) {
    ofertItems[i].addEventListener('mouseenter', function() {
        this.classList.add('open-info')
    })
    ofertItems[i].addEventListener('mouseleave', function() {
        this.classList.remove('open-info')
    })
}
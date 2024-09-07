const ofertItems = document.querySelectorAll('.oferts-item');
const ofertInfos = document.querySelectorAll('.oferts-item > .info');

for(let i = 0; i < ofertItems.length; i++) {
    ofertItems[i].addEventListener('mouseenter', () => {
        ofertItems[i].classList.add('flip-icon');
        ofertInfos[i].classList.add('open-info');
    });
    ofertItems[i].addEventListener('mouseleave', () => {
        ofertItems[i].classList.remove('flip-icon');
        ofertInfos[i].classList.remove('open-info');
    });
};
let min = 0;
const max = 200;
const header = document.querySelector('header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > min && !containHide() && scrollPosition() > max) {

        header.classList.add('hide');
    }
    else if (scrollPosition() < min && containHide()) {

        header.classList.remove('hide');
    }

    min = scrollPosition();
})





const toggle = document.querySelector('.topbar-toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');
const list = document.querySelectorAll('.navigation li.navigation-item');

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
});

function addActiveClass() {
    list.forEach((item) => {
        item.classList.remove('hover');
        this.classList.add('hover');
    });
}

list.forEach((item) => {
    item.addEventListener('mouseover', addActiveClass);
});

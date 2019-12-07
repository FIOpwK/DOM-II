// Your code goes here
// const main_html = document.querySelector('html');
// main_html.style.backgroundColor = 'red';
const main_nav = document.querySelector('.main-navigation')
window.addEventListener('resize', (event) => {
    main_nav.style.backgroundColor = '#1222';

})


const all_images = document.querySelectorAll('img');
all_images[0].addEventListener('dblclick', (event) => {
    all_images[0].setAttribute('src', 'img/13178635_1082197168511196_4041460445760705289_n.jpg')
    all_images[0].style.height = '30rem';
})

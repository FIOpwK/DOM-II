// Your code goes here

// const main_html = document.querySelector('body');
// main_html.addEventListener('scroll', (event) => {
//     main_html.style.backgroundColor = 'red';
    
// }) 

// resize
const main_nav = document.querySelector('.main-navigation')
window.addEventListener('resize', (event) => {
    main_nav.style.backgroundColor = '#1222';

})

// dblclick
const all_images = document.querySelectorAll('img');
all_images[0].addEventListener('dblclick', (event) => {
    all_images[0].setAttribute('src', 'img/13178635_1082197168511196_4041460445760705289_n.jpg')
    all_images[0].style.height = '30rem';
})

// mouseover
all_images[1].addEventListener('mouseover', (event) => {
    all_images[1].style.borderRadius = '400px';
})

// click
const all_buttons = document.querySelectorAll('.btn')
all_buttons[0].addEventListener('click', (event) => {
    all_buttons[0].style.backgroundColor =  'dodgerblue';
    all_buttons[0].style.color = 'white';
}) 


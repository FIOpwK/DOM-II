// Your code goes here
const main_html = document.querySelectorAll('html')
// main_html.style.width = '100%';

const main_body = document.querySelector('body')
// main_html.addEventListener('scroll', (event) => {
//     main_html.style.backgroundColor = 'red';
    main_body.style.overflow = 'scroll';
    window.addEventListener('load', (event) => {
       for (let i=0; i< all_buttons.length; i++) {
           all_buttons[i].style.backgroundColor = 'red';
       }
        
    })
// }) 

const header = document.querySelector('.main-navigation')

// resize
const main_nav = document.querySelector('.main-navigation')
window.addEventListener('resize', (event) => {
    main_nav.style.backgroundColor = '#1222';

})

// dblclick
const all_images = document.querySelectorAll('img')
all_images[0].addEventListener('dblclick', (event) => {
    all_images[0].setAttribute('src', 'img/13178635_1082197168511196_4041460445760705289_n.jpg')
    all_images[1].setAttribute('src', 'img/explora_map.jpg')
    all_images[2].setAttribute('src', 'img/disney_adventure.jpg')
    all_images[3].setAttribute('src', 'img/black_perl.jpg')
    all_images[0].style.height = '30rem';
    main_body.style.backgroundColor = 'black';
    main_body.style.color = 'white';
    main_body.style.fontFamily = 'cursive';
    header.style.backgroundColor = 'black';
    header.style.color = 'white';

    for (let i=0; i<all_buttons.length; i++) {
        all_buttons[i].style.backgroundColor = 'limegreen';
    }

})

// mouseover
all_images[0].addEventListener('mouseover', (event) => {
    all_images[1].style.borderRadius = '40rem';
    all_images[2].style.borderRadius = '40rem';
    all_images[3].style.borderRadius = '40rem';
    // all_images[2].style.borderRadius = '40rem';


})



// mouseout
all_images[0].addEventListener('mouseout', (event) => {
    all_images[0].style.borderRadius = '';
    all_images[1].style.borderRadius = '';
    all_images[2].style.borderRadius = '';
    all_images[3].style.borderRadius = '';
})

// click
const all_buttons = document.querySelectorAll('.btn')
all_buttons[0].addEventListener('click', (event) => {
    all_buttons[0].style.backgroundColor =  'dodgerblue';
    all_buttons[0].style.color = 'white';
}) 





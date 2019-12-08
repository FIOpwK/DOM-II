// [1]
window.addEventListener('scroll', (scroll) => {console.log('scroll [2]')})
// [2]
window.addEventListener('load', (load) => {
    for(let i=0; i<all_buttons.length; i++) {
        all_buttons[i].textContent = 'Fun Button';
    }
    
    console.log('load [1]')
})
// [3]
window.addEventListener('resize', (resize) => {
    for(let i=0; i<all_buttons.length; i++) {
        all_buttons[i].style.backgroundColor = 'red';
    }
    console.log('resize [3]')
})

// Grab Elements
const nav = document.querySelectorAll('.nav', '.nav-link')
const all_images = document.querySelectorAll('img')
const all_buttons = document.querySelectorAll('.btn')
const content_pick = document.querySelectorAll('.content-pick', '.destination')


// Document Events

// :::: NAV :::: 
// [4]
nav[0].addEventListener('mouseover', (mouseover) => {
    console.log('mouseover [4]')
})  

// :::: IMAGES ::::
// [5]
all_images[0].addEventListener('mouseenter', (mouseenter) => {
    console.log('mouse enter [5]')
})
// [6]
all_images[0].addEventListener('mouseleave', (mouseleave) => {
    console.log('mouse leave [6]')
})
// [7]
all_images[0].addEventListener('dblclick', (dblclick) => {
    all_images[0].setAttribute('src', 'img/13178635_1082197168511196_4041460445760705289_n.jpg')
    console.log('dblclick [7]')

})
// [8]
all_images[0].addEventListener('drag', (drag) => {
    all_images[0].style.borderRadius = '40rem';
    console.log('drag [8]')
})
// [9]
all_images[0].addEventListener('dragleave', (dragleave) => {
    all_images[0].style.borderRadius = '';
    console.log('dragleave [9]')
})


//  :::: BUTTONS ::::
// [10]
all_buttons[0].addEventListener('click', (click) => {
    console.log('click [10]')
})
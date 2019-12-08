// [1]
window.addEventListener('scroll', (scroll) => {console.log('scroll')})
// [2]
window.addEventListener('load', (load) => {console.log('load')})
// [3]
window.addEventListener('resize', (resize) => {
    for(let i=0; i<all_buttons.length; i++) {
        all_buttons[i].style.backgroundColor = 'red';
    }
    console.log('resize')})

// Grab Elements
const nav = document.querySelectorAll('.nav', '.nav-link')
const all_images = document.querySelectorAll('img')
const all_buttons = document.querySelectorAll('.btn')
const content_pick = document.querySelectorAll('.content-pick', '.destination')


// Document Events

// :::: NAV :::: 
// [4]
nav[0].addEventListener('mouseover', (mouseover) => {
    console.log('mouseover')
})  

// :::: IMAGES ::::
// [5]
all_images[0].addEventListener('mouseenter', (mouseenter) => {
    console.log('mouse enter')
})
// [6]
all_images[0].addEventListener('mouseleave', (mouseleave) => {
    console.log('mouse leave')
})
// [7]
all_images[0].addEventListener('dblclick', (dblclick) => {
    all_images[0].setAttribute('src', 'img/13178635_1082197168511196_4041460445760705289_n.jpg')
    console.log('dblclick')

})
// [8]
all_images[0].addEventListener('drag', (drag) => {
    all_images[0].style.borderRadius = '40rem';
    console.log("drag")
})
// [9]
all_images[0].addEventListener('dragleave', (dragleave) => {
    all_images[0].style.borderRadius = '';
    console.log('dragleave')
})


//  :::: BUTTONS ::::
// [10]
all_buttons[0].addEventListener('click', (click) => {
    console.log('click')
})
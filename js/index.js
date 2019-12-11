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
document.addEventListener('click', (event) => {
    // alert('clicked')
    for(let i=0; i<all_buttons.length; i++) {
        all_buttons[i].textContent = 'Sign Up';
    }
    
    console.log('document click')
})

// :::: NAV :::: 
// [4]
nav[0].addEventListener('mouseover', (mouseover) => {
    console.log('mouseover [4]')
})  

nav[0].addEventListener('mouseout', (mouseout) => {
    console.log('mouseout [11]')
})

nav[0].addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log('nav click preventDefault()')
    
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
    all_images[1].setAttribute('src', 'img/explora_map.jpg')
    all_images[2].setAttribute('src', 'img/disney_adventure.jpg')
    all_images[3].setAttribute('src', 'img/black_perl.jpg')
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
    all_buttons[1].addEventListener('click', (event) => {
        content_pick[0].style.backgroundColor = 'red';
        event.stopPropagation();
        console.log('click [10.5')
    })

    // :::: CONTENT :::: 

    content_pick[0].addEventListener('mouseleave', (event) => {
        content_pick[0].style.backgroundColor = '';
        
    })
    console.log('click [10]')
})

content_pick[0].addEventListener('mouseenter', (event) => {
    content_pick[0].children[0].style.backgroundColor = 'blue';
    content_pick[0].children[1].addEventListener('click', (event) => {
        content_pick[0].children[0].style.backgroundColor = '';

    });
    console.log(event)
})
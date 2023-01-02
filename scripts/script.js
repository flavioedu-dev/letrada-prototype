let btn = document.querySelector('.mobile-nav')
let nav = document.querySelector('.nav')

btn.addEventListener('click', (e) => {
    console.log(nav)
    if(nav.classList == 'nav'){
        nav.classList = 'nav active'
    }else{
        nav.classList = 'nav'
    }
})
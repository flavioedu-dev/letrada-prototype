const btnNav = document.querySelector('.mobile-nav')
const nav = document.querySelector('.nav')
const btnIcon = document.getElementById("btn-icon")
const btnFollow = document.querySelectorAll(".btn")
const foot = document.getElementById("foot")

btnNav.addEventListener('click', () => {
    console.log(nav)
    if(nav.classList == 'nav'){
        nav.classList = 'nav active'
        btnIcon.style.display = 'block'
    }else{
        nav.classList = 'nav'
    }
})

btnIcon.addEventListener('click', () => {
    console.log(btnIcon)
    nav.classList = 'nav'
    btnIcon.style.display = 'none'
})

function follow(){
    window.scroll(foot.offsetLeft, foot.offsetTop)
}
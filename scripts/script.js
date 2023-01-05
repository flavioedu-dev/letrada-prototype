const btnNav = document.querySelector('.mobile-nav')
const nav = document.querySelector('.nav')
const btnIcon = document.getElementById('btn-icon')
const foot = document.getElementById("foot")
const btnNavOption = document.querySelectorAll('.nav-option')

function showNav(){
    if(nav.classList == 'nav'){
        nav.classList = 'nav active'
        btnIcon.style.display = 'block'
    }else{
        nav.classList = 'nav'
    }
}

function closeNav(){
    nav.classList = 'nav'
    btnIcon.style.display = 'none'
}

function follow(){
    window.scroll(foot.offsetLeft, foot.offsetTop)
}

nav.addEventListener('click', (e) => {
    let option = e.target.innerText
    
    if(option === 'Apresentação'){
        let aux = document.getElementById("banner")
        window.scroll(aux.offsetLeft, aux.offsetTop)

    }else if(option === 'Equipe'){
        let aux = document.getElementById("team")
        window.scroll(aux.offsetLeft, aux.offsetTop)

    }else if(option === 'Notícias'){
        let aux = document.getElementById("blog")
        window.scroll(aux.offsetLeft, aux.offsetTop)

    }else if(option === 'Contatos'){
        let aux = document.getElementById("foot")
        window.scroll(aux.offsetLeft, aux.offsetTop)

    }

    closeNav()
})

btnNav.addEventListener('click', () => {
    showNav()
})

btnIcon.addEventListener('click', () => {
    closeNav()
})
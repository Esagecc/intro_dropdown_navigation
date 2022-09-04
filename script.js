// NavBar-SideNav
let toggle = document.getElementById('toggle')
let navbarShow = document.getElementById('navbar-list')
let overlay = document.querySelector('.overlay')

document.onclick = function(e){
    if(e.target.id !== 'navbarShow' && e.target.id !== 'toggle')
        {
        toggle.classList.remove('active')
        navbarShow.classList.remove('active')
        overlay.classList.remove('active')
    }
    }
    toggle.onclick = function(){
    toggle.classList.toggle('active')
    navbarShow.classList.toggle('active')
    overlay.classList.toggle('active')
    }

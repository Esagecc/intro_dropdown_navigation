// NavBar-SideNav
let toggle = document.getElementById('toggle')
let navbarShow = document.getElementById('navbar-list')
let overlay = document.querySelector('.overlay')
let subMenuOneArrow = document.querySelector('.arrow-down-one')
let subMenuTwoArrow = document.querySelector('.arrow-down-two')
let firstSubMenu = document.querySelector('.first-submenu')
let secondSubMenu = document.querySelector('.second-submenu')

document.onclick = function(e){
    if(e.target.id === 'toggle')
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

document.onclick = function(e){

subMenuOneArrow.onclick= function() {
    subMenuOneArrow.classList.toggle('active')
    firstSubMenu.classList.toggle('active')
}

subMenuTwoArrow.onclick= function() {
    subMenuTwoArrow.classList.toggle('active')
    secondSubMenu.classList.toggle('active')
}

}

// e.target.id !== 'navbarShow' && 
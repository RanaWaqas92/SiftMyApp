 let expendColleps = function (){
    var classNameSidebar = document.getElementsByClassName('s-sidebar');
    classNameSidebar[0].classList.toggle('s-container-expend');
   
}
document.querySelectorAll('.arrow').forEach(e => {
    e.querySelector('.sidebar-nav-link').onclick = (event) => {
        event.preventDefault()
        e.querySelector('.sidebar-nav-link .fa-arrow-down').classList.toggle('active')

        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
    }
})
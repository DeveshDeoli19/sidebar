const sidebarBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.btn-cross')
const sidebar = document.querySelector('.sidebar')

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');

    menuIcon.addEventListener('click', function () {
        sidebar.classList.toggle('active'); 
        
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});
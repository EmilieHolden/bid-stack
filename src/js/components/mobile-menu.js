//MOBILE MENU
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

if (menuIcon && menu) {
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('hidden');

        // Toggle icon
        if (menu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');

        } else {
            menuIcon.classList.remove('fa-bars')
            menuIcon.classList.add('fa-xmark');
        }
    });
}
const barsIcon = document.getElementById('barsicon');
const menu = document.getElementById('phonemenu');

barsIcon.addEventListener('click', function () {
    // Check if the menu is currently displayed as 'flex'
    if (menu.style.display === 'flex') {
        // If it is, hide it
        menu.style.display = 'none';
    } else {
        // If it is not, show it
        menu.style.display = 'flex';
    }
});

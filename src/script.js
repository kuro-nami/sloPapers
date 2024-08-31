console.log('Made by Nabeel Sadiq.\n😀')

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


document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading screen
    var loadingScreen = document.getElementById("loading-screen");
    var content = document.getElementById("content");

    // Simulate content loading with a timeout (you can replace this with actual loading logic)
    setTimeout(function() {
        loadingScreen.style.display = "none"; // Hide loading screen
        content.style.display = "block"; // Show content
    }, 2250); // Adjust the delay as needed
});
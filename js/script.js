document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById("menu");

    function toggleMenu() {
        menu.classList.toggle("visible");
        menu.classList.toggle("hidden"); // Sigurohuni që të hiqni klasën 'hidden' gjithmonë kur e shfaqni
    }

    hamburger.addEventListener('click', toggleMenu);
});

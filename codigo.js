document.addEventListener("DOMContentLoaded", function() {
    const menulateral = document.querySelector('.menu__lateral');

    menulateral.addEventListener('mouseenter', () => {
        menulateral.classList.add('show-scrollbar');
    });

    menulateral.addEventListener('mouseleave', () => {
        menulateral.classList.remove('show-scrollbar');
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    let menuLateral = document.getElementById('menu__lateral');
    menuLateral.classList.toggle('minimized');
});
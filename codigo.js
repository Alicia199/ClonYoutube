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

document.getElementById('prev').addEventListener('click', function() {
    document.querySelector('.categorias-wrapper').scrollBy({
        left: -100,
        behavior: 'smooth'
    });
});

document.getElementById('next').addEventListener('click', function() {
    document.querySelector('.categorias-wrapper').scrollBy({
        left: 100,
        behavior: 'smooth'
    });
});
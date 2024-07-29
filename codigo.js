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

const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const categorias = document.querySelector(".categorias-wrapper")

const updateButtons = () => {
    prev.classList.toggle('hidden', categorias.scrollLeft === 0);
    next.classList.toggle('hidden', categorias.scrollLeft + categorias.clientWidth >= categorias.scrollWidth);
};

const scrollCategorias = (direction) => {
    categorias.scrollLeft += direction === 'next' ? 100 : -100;
    updateButtons();
};

prev.addEventListener("click", () => {
    scrollCategorias('prev');
});

next.addEventListener("click", () => {
    scrollCategorias('next');
});

categorias.addEventListener("scroll", updateButtons);

updateButtons();// Inicializar el estado de los botones al cargar la página
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

prev.addEventListener("click", () => {
    categorias.scrollLeft = Math.max(categorias.scrollLeft - 100, 0);
});
const updateButtons = () => {
    prev.disabled = categorias.scrollLeft === 0;
    next.disabled = categorias.scrollLeft + categorias.clientWidth >= categorias.scrollWidth;
  };
  
const scrollCategorias = (direction) => {
    categorias.scrollLeft += direction === 'next' ? 100 : -100;
    updateButtons();
};
  
prev.addEventListener("click", () => scrollCategorias('prev'));
next.addEventListener("click", () => scrollCategorias('next'));
  
updateButtons();// Inicializar el estado de los botones al cargar la página
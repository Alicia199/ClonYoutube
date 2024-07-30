document.addEventListener('DOMContentLoaded', function() {
    const menuLateral = document.querySelector('.menu__lateral');
    const videoContent = document.querySelector('.video-content');
    const toggleButton = document.getElementById('toggleButton');

    //para alternar el menú lateral y el estado del video
    const toggleMenu = () => {
        if (window.innerWidth <= 850) {
            menuLateral.classList.toggle('visible');
            videoContent.classList.toggle('dimmed');
        } else {
            menuLateral.classList.toggle('minimized');
        }
    };

    toggleButton.addEventListener(('click'), toggleMenu);

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const categorias = document.querySelector('.categorias-wrapper');

    const updateButtons = () => {
        prev.classList.toggle('hidden', categorias.scrollLeft === 0);
        next.classList.toggle('hidden', categorias.scrollLeft + categorias.clientWidth >= categorias.scrollWidth);
    };

    const scrollCategorias = (direction) => {
        categorias.scrollLeft += direction === 'next' ? 100 : -100;
        updateButtons();
    };

    prev.addEventListener('click', () => {
        scrollCategorias('prev');
    });

    next.addEventListener('click', () => {
        scrollCategorias('next');
    });

    categorias.addEventListener('scroll', updateButtons);

    updateButtons(); // Inicializar el estado de los botones al cargar la página

    menuLateral.addEventListener('mouseenter', () => {
        menuLateral.classList.add('show-scrollbar');
    });

    menuLateral.addEventListener('mouseleave', () => {
        menuLateral.classList.remove('show-scrollbar');
    });
});
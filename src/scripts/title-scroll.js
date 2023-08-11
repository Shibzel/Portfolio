window.addEventListener('scroll', function () {
    var title = document.querySelector('.header-title');

    if (window.scrollY < 280) {
        title.style.opacity = '0';
    } else {
        title.style.opacity = '1';
    }
});

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        nav.classList.add('scrolled-nav');
    } else {
        nav.classList.remove('scrolled-nav');
    }
})



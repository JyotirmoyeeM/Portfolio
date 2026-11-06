document.querySelectorAll('nav').forEach((nav) => {
    const toggle = nav.querySelector('.nav-toggle');
    const menu = nav.querySelector('#primary-nav');

    if (!toggle || !menu) {
        return;
    }

    const closeMenu = () => {
        nav.classList.remove('is-menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
    };

    toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        nav.classList.toggle('is-menu-open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target)) {
            closeMenu();
        }
    });

    nav.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
            toggle.focus();
        }
    });
});

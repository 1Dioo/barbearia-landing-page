document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    window.setTimeout(() => loader?.classList.add('is-hidden'), 700);

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    navToggle?.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
            nav?.classList.remove('is-open');
            navToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.gallery-item').forEach(btn => {
            btn.addEventListener('click', () => {
            const full = btn.dataset.full;
            if (!full) return;
            lightboxImage.src = full;
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
    };

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
});

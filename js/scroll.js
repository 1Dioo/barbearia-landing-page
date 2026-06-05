document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('backToTop');

    const toggleBackToTop = () => {
        if (window.scrollY > 500) backToTop.classList.add('is-visible');
        else backToTop.classList.remove('is-visible');
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

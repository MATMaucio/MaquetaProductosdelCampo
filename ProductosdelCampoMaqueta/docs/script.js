document.addEventListener("DOMContentLoaded", () => {
    // Animación al hacer scroll (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Sombra en el header al hacer scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
            header.style.padding = "5px 0";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            header.style.padding = "10px 0";
                }
            });

    // Smooth scroll para links del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
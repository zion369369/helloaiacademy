import './style.css'

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// Initialize reveals
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Mouse Parallax for Background Mesh
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (clientX - centerX) / 50;
    const moveY = (clientY - centerY) / 50;
    
    const m1 = document.querySelector('.mesh-1');
    const m2 = document.querySelector('.mesh-2');
    
    if (m1) m1.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if (m2) m2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});

console.log('Hello AI Academy - Sophistication Initialized.');


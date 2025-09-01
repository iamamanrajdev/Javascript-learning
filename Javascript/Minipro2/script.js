// Canvas ko HTML se select karo
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

// Screen ke size ke hisab se canvas ka size set karo
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sabhi particles ko store karne ke liye ek array banayenge
let particlesArray = [];
const numberOfParticles = 100; // Kitne particles chahiye

// Step 1: Particles ko banane ka function
function init() {
    // Har baar naye particles banane se pehle purane array ko khali kar do
    particlesArray = []; 
    for (let i = 0; i < numberOfParticles; i++) {
        // Har particle ek simple object hai jisme uski properties (x, y, size, speed) hain
        particlesArray.push({
            x: Math.random() * canvas.width,       // Random X position
            y: Math.random() * canvas.height,      // Random Y position
            size: Math.random() * 2 + 1,           // Random size (1 se 3 ke beech)
            speedX: (Math.random() * 0.5 - 0.25),  // Random horizontal speed
            speedY: (Math.random() * 0.5 - 0.25)   // Random vertical speed
        });
    }
}

// Step 2: Animation chalaane ka function (yahi اصل جادو hai)
function animate() {
    // Har frame par purani drawing ko saaf karo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // particlesArray ke har particle ke liye loop chalao
    for (let i = 0; i < particlesArray.length; i++) {
        let particle = particlesArray[i];

        // 1. Particle ki position ko uski speed ke hisab se update karo
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 2. Agar particle screen se bahar chala jaaye to use wapas screen par le aao
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
        }

        // 3. Particle ko canvas par draw karo (ek chhota sa circle)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // White color, thoda transparent
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Agle frame ke liye animate function ko phir se call karo (isse loop chalta rahega)
    requestAnimationFrame(animate);
}

// Shuruaat karo!
init();   // Particles banao
animate(); // Animation shuru karo

// Agar user window ka size badle, to particles ko phir se set karo
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // Phir se particles banao
});
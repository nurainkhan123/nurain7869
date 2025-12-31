const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.sx = Math.random() * 3 - 1.5;
        this.sy = Math.random() * -3 - 3;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    update() {
        this.x += this.sx;
        this.y += this.sy;
        this.sy += 0.05;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let particles = [];
function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.1) particles.push(new Firework());
    particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.y > canvas.height) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
}
animate();
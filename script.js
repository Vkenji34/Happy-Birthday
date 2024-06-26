function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

function getRandomColor() {
    const colors = ['#FF1493', '#1E90FF', '#32CD32', '#FFD700', '#FF4500', '#8A2BE2'];
    return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createConfetti, 200);

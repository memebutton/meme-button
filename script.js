const button = document.getElementById('memeButton');
const audio = document.getElementById('memeSound');

button.addEventListener('click', () => {
    audio.currentTime = 0; // Rewind to start if clicked again
    audio.play();
});

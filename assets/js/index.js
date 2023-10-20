const audio = document.querySelector('audio');
const volumeButton = document.getElementById('volumeButton');
const volumeIcon = document.getElementById('volumeIcon');

// Mute and mute index page
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-high');
    } else {
        audio.pause();
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.add('fa-volume-mute');
    }
}

volumeButton.addEventListener('click', toggleAudio);
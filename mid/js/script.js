const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const songs = ['res/music-1.mp3', 'res/music-2.mp3', 'res/music-3.mp3', 'res/music-4.mp3'];
let currentSongIndex = 0;

function playPause() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '暂停';
    } else {
        audio.pause();
        playButton.textContent = '播放';
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playButton.textContent = '暂停';
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    playButton.textContent = '暂停';
}

playButton.addEventListener('click', playPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

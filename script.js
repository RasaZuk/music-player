const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//check if playing
let isPlaying = false;


//play
function playSong() {
    isPlaying = true;
    music.play();
}

//pause
function pauseSong() {
    isPlaying = false;
    music.pause();
}

//play or pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
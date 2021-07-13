const musicContainer = document.querySelector(".music-player-container");
const musicDetail = document.querySelector(".music-detail");
const imageContainer = document.querySelector(".image-container");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress");

const audio = document.getElementById("audio");
const image = document.getElementById("song-image");
const title = document.getElementById("title");

const prevBtn = document.getElementById("prev-btn");
const playBtn = document.getElementById("play-btn");
const forwardBtn = document.getElementById("forward-btn");

const songs = ['hey', 'summer', 'ukulele'];
let songIdx = 2;

function loadMusic(idx) {
    let songTitle = songs[idx];

    audio.src = `music/${songTitle}.mp3`;
    image.src = `image/${songTitle}.jpg`;
    title.innerText = `${songTitle}`;
}

// 음악 재생
function playMusic() {
    musicContainer.classList.add("play");
    playBtn.childNodes[1].classList.replace("fa-play", "fa-pause");
    audio.play();
}

// 음악 재생 정지
function pauseMusic() {
    musicContainer.classList.remove("play");
    playBtn.childNodes[1].classList.replace("fa-pause", "fa-play");
    audio.pause();
}

// 이전 음악 재생
function movePrevMusic() {
    songIdx--;

    if (songIdx < 0) {
        songIdx = songs.length - 1;
    }

    loadMusic(songIdx);
    playMusic();
}


// 다음 음악 재생
function moveNextMusic() {
    songIdx++;

    if (songIdx >= songs.length) {
        songIdx = 0;
    }

    loadMusic(songIdx);
    playMusic();
}

loadMusic(songIdx);

prevBtn.addEventListener("click", movePrevMusic);
forwardBtn.addEventListener("click", moveNextMusic);
playBtn.addEventListener("click", function () {
    let isPlaying = playBtn.childNodes[1].classList.contains("fa-pause");

    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});
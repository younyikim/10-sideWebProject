const musicContainer = document.querySelector(".music-player-container");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress");

const audio = document.getElementById("audio");
const image = document.getElementById("song-image");
const title = document.getElementById("title");
const playTime = document.getElementById("play-time");

const prevBtn = document.getElementById("prev-btn");
const playBtn = document.getElementById("play-btn");
const forwardBtn = document.getElementById("forward-btn");

// 음악의 제목들
const songs = ['hey', 'summer', 'ukulele'];
let songIdx = 2;

// 재생할 음악을 선택
function loadMusic(idx) {
    const songTitle = songs[idx];

    audio.src = `music/${songTitle}.mp3`;
    image.src = `image/${songTitle}.jpg`;
    title.innerText = `${songTitle}`;
}

// 음악 재생
function playMusic() {
    musicContainer.classList.add("play");

    // 음악 재생 중에는 pause 아이콘을 보여준다.
    playBtn.childNodes[1].classList.replace("fa-play", "fa-pause");

    audio.play();

    progressing();
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

// 현재 재생되고 있는 음악의 재생 bar를 표시
function progressing() {
    const duration = audio.duration; // 총 시간
    const currentTime = audio.currentTime;

    progressBar.style.width = currentTime / duration * 100 + "%";

    // 현재 음악 재생 완료 시, 다음 음악 재생
    if (duration == currentTime) {
        moveNextMusic();
    }
}

// Progress bar를 업데이트
function updateProgress(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// 음악의 재생 시간을 표시
function duration() {
    let currentTime = Math.floor(audio.currentTime).toString();

    let hr = Math.floor(currentTime / 3600);
    let min = Math.floor((currentTime - (hr * 3600)) / 60);
    let sec = Math.floor(currentTime - (hr * 3600) - (min * 60));


    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    time = min + ":" + sec;
    playTime.innerHTML = time;
}

loadMusic(songIdx);

// Event Listeners
// Progress bar와 시간 업데이트
progressContainer.addEventListener("click", updateProgress);
audio.addEventListener("timeupdate", progressing);
audio.addEventListener("timeupdate", duration);

// 음악을 변경
prevBtn.addEventListener("click", movePrevMusic);
forwardBtn.addEventListener("click", moveNextMusic);

// 음악 재생, 일시정지
playBtn.addEventListener("click", function () {
    let isPlaying = playBtn.childNodes[1].classList.contains("fa-pause");

    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});
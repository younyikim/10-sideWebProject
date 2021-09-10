const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const counterContainer = document.querySelector(".counter-container");
const currentYear = new Date().getFullYear();
const newYear = new Date(`September 24 ${currentYear} 00:00:00`);

// 내년 날짜 표시
const nextYear = document.getElementById("nextYear");
nextYear.innerHTML = newYear.getFullYear();

const title = document.getElementById("title");
title.innerHTML = 'MinYoung Birthday countdown';

function newYearCountdown(intervalId) {
    const currentDate = new Date();
    const time = newYear - currentDate;

    const day = Math.floor(time / 1000 / 60 / 60 / 24);
    const hour = Math.floor(time / 1000 / 60 / 60) % 24;
    const min = Math.floor(time / 1000 / 60) % 60;
    const sec = Math.floor(time / 1000) % 60;

    days.innerHTML = day;
    hours.innerHTML = hour >= 10 ? hour : '0' + hour;
    minutes.innerHTML = min >= 10 ? min : '0' + min;
    seconds.innerHTML = sec >= 10 ? sec : '0' + sec;
}

// 1초마다 countdown 함수 실행
setInterval(newYearCountdown, 1000);
const container = document.querySelector(".container");
const message = document.getElementById("text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
    message.innerText = 'Breathe In';
    container.className = 'container grow';

    setTimeout(() => {
        message.innerText = 'Hold';

        setTimeout(() => {
            message.innerText = 'Breathe Out!'
            container.className = 'container shrink';
        }, holdTime);

    }, breathTime);
}

breathAnimation();
setInterval(breathAnimation, totalTime);
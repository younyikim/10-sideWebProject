const setting = document.querySelector(".setting-container");
const settingForm = document.getElementById("settings-form");
const settingBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");
const word = document.getElementById("word");
const time = document.getElementById("time");
const score = document.getElementById("score");
const input = document.getElementById("typing");
const result = document.querySelector(".end-game-container");

// List of words for game
const wordsEasy = [
    'pile',
    'swipe',
    'extreme',
    'rainbow',
    'relate',
    'capture',
    'railroad',
    'monk',
    'shell',
    'box',
    'fake',
    'system',
    'paper',
    'aware',
    'posture',
    'sum',
    'define',
    'prey',
    'crew',
    'population'
];
const wordsMedium = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];
const wordsHard = [
    'demonstrator',
    'miserable',
    'discrimination',
    'convenience',
    'aluminium',
    'abandon',
    'opponent',
    'compartment',
    'consumption',
    'headquarters',
    'therapist',
    'governor',
    'highfalutin',
    'superficial',
    'convulsion',
    'ambiguous',
    'influence',
    'recommendation',
    'entertainment',
    'depression'
];

let randomWord;
let gameScore = 0;

let count = 10;
let counter = setInterval(setTime, 1000);

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// 화면에 단어를 출력한다.(난이도 별로 구분)
function addWordToDOM() {
    let words = [];
    difficulty = localStorage.getItem('difficulty');

    if (difficulty == 'easy') {
        words = wordsEasy;
    }
    else if (difficulty == 'medium') {
        words = wordsMedium;
    }
    else if (difficulty == 'hard') {
        words = wordsHard;
    }

    randomWord = selectWord(words);
    word.innerHTML = randomWord;
}

// 점수를 계산한다.
function updateScore() {
    gameScore += 1;
    score.innerHTML = gameScore;
}

// 단어를 랜덤하게 선택한다.
function selectWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// 게임 종료시, 최종 점수를 보여준다.
function showResult() {
    result.style.display = "flex";
    result.innerHTML = `
        <h1>Time ran out</h1>
        <p class="end-game-info">Your final Score is <span id="finalScore">${gameScore}</span></p>
        <button onclick="location.reload()">Reload</button>
    `;
}

// 타이머
function setTime() {
    count--;

    if (count <= 0) {
        clearInterval(counter);
        showResult();
        return;
    }

    time.innerHTML = count + 's';
}

addWordToDOM();


// Event Listener

// input 입력창
input.addEventListener('input', (e) => {
    const insertedText = e.target.value;

    if (insertedText == randomWord) {
        addWordToDOM();
        updateScore();
        e.target.value = '';

        count += 3;
        setTime();
    }
});

// 설정 버튼
settingBtn.addEventListener('click', () => {
    setting.classList.toggle('hide');
});

// 난이도 조절 시 loaclStorage의 diffculty 변경
settingForm.addEventListener('change', () => {
    localStorage.setItem('difficulty', difficultySelect.value);
    addWordToDOM();
});
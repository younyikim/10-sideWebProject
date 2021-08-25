const cardsContainer = document.getElementById("cards-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const currentEl = document.getElementById("current");
const showBtn = document.getElementById("show");
const closeBtn = document.getElementById("btn-close");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCardBtn = document.getElementById("add-card");
const clearBtn = document.getElementById("btn-clear");
const addContainer = document.getElementById("add-card-container");

let currentActiveCard = 1;

const cardsEl = [];

const cardsData = getCardsData();

// 모든 Card를 생성한다.
function createCards() {
   cardsData.forEach((data, index) => {
      createCard(data, index);
   });
}

// 새로운 Card를 추가한다.
function createCard(data, index) {
   const card = document.createElement('div');
   card.classList.add('card');

   if (index === 0) {
      card.classList.add('active');
   }

   card.innerHTML = `
      <div class="inner-card">

         <div class="inner-card-front">
           <p>${data.question}</p>
         </div>

         <div class="inner-card-back">
            <p>${data.answer}</p>
         </div>
      </div>
   `;

   card.addEventListener('click', () => card.classList.toggle('show-answer'));

   cardsEl.push(card);

   cardsContainer.appendChild(card);

   updateCurrentActiveText();
}

// Card의 개수와 현재 카드의 번호를 보여준다.
function updateCurrentActiveText() {
   currentEl.innerText = `${currentActiveCard} / ${cardsEl.length}`;
}

// localstorage에서 card data를 가져온다.
function getCardsData() {
   const cards = JSON.parse(localStorage.getItem('cards'));
   return cards === null ? [] : cards;
}

// localstorage에 새로운 카드 정보를 저장한다.
function setCardsData(cards) {
   localStorage.setItem('cards', JSON.stringify(cards));
   window.location.reload();
}

createCards();

// Event Listener
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
closeBtn.addEventListener('click', () => addContainer.classList.remove('show'));

addCardBtn.addEventListener('click', () => {
   const question = questionEl.value;
   const answer = answerEl.value;

   if (question.trim() && answer.trim()) {
      const newCard = { question, answer };

      createCard(newCard);

      questionEl.value = '';
      answerEl.value = '';

      cardsData.push(newCard);
      setCardsData(cardsData);
   }
});
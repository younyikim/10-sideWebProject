const draggable_list = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check-btn');

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

const listItems = [];

let dragStartIndex;

createList();

// list의 항목을 추가
function createList() {
    [...richestPeople]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
                <span class="list-index">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="list-name">${person}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);
            draggable_list.appendChild(listItem);
        });

    addEventListeners();
}

// DRAG-START : 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생
function dragStart(event) {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

// DRAG-ENTER : 드래그한 요소나 텍스트 블록을 적합한 드롭 대상위에 올라갔을 때 발생
function dragEnter(event) {
    this.classList.add('over');
}

// DRAG-LEAVE : 드래그하는 요소나 텍스트 블록이 적합한 드롭 대상에서 벗어났을 때 발생
function dragLeave() {
    this.classList.remove('over');
}

// DRAP-DROP : 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생
function dragDrop(event) {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItem(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

// DRAG-OVER : 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생
function dragOver(event) {
    // 브라우저에서 DROP 동작을 방지하고 있기 때문에, 이 기본 동작을 취소해줘야 한다.
    event.preventDefault();
}

function swapItem(fromIndex, toIndex) {
    const itemFrom = listItems[fromIndex].querySelector('.draggable');
    const itemTo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTo);
    listItems[toIndex].appendChild(itemFrom);
}

function checkOrder() {
    listItems.forEach((listItem, index) => {
        const personName = listItem.querySelector('.list-name').innerText.trim();
        console.log(personName, index);

        if (personName !== richestPeople[index]) {
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    });
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}

checkBtn.addEventListener('click', checkOrder);
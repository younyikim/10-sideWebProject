// 해당 요소가 viewport 내에 있는지 확인하는 함수
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//scroll 이벤트를 추가하고, 해당 element에 callback 함수를 등록하는 함수
const addEventToEl = (elList) => {
    document.addEventListener('scroll', () => {
        elList.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('tada');
            } else {
                el.classList.remove('tada');
            }
        })
    })
}

const boxElList = document.querySelectorAll('.box');
addEventToEl(boxElList);
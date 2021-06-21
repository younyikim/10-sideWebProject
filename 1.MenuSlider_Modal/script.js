let btnSideBarMenu = document.getElementById("sidebar-menu-btn");
btnSideBarMenu.addEventListener("click", openSideBarMenu);

let modal = document.querySelector(".showcase-modal");
let modalClose = document.querySelector(".showcase-modal-close");
let btnPortpolio = document.getElementById("showcase-portfolio-btn");

//'My Project' 버튼을 클릭시, modal을 보여준다.
btnPortpolio.addEventListener("click", function () {
    modal.style.display = "block";
});

// modal의 X(닫기 버튼)을 클릭 시, modal을 닫는다.
modalClose.addEventListener("click", function () {
    modal.style.display = "none";
});

// 사용자가 프로젝트 포트폴리오 modal 외부를 클릭 시, modal을 닫는다.
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})


let isSideBarCliked = true;
function openSideBarMenu() {
    if (isSideBarCliked) {
        document.querySelector(".sidebar-menu").style.width = "200px";
        document.querySelector("header").style.marginLeft = "200px";
        document.querySelector("#sidebar-menu-btn").style.marginLeft = "200px";
        document.querySelector("section").style.marginLeft = "200px";
        isSideBarCliked = false;
    } else {
        document.querySelector(".sidebar-menu").style.width = "0";
        document.querySelector("header").style.marginLeft = "0";
        document.querySelector("#sidebar-menu-btn").style.marginLeft = "0";
        document.querySelector("section").style.marginLeft = "0";
        isSideBarCliked = true;
    }

}
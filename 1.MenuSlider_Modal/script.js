let btnSideBarMenu = document.getElementById("sidebar-menu-btn");
btnSideBarMenu.addEventListener("click", openSideBarMenu);

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
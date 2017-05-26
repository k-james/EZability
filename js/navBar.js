var menu = document.getElementById("nav-component");
        
function responsiveMenu() {
    "use strict";
    if (menu.className === "nav-menu") {
        menu.className += " responsive";
    } else {
        menu.className = "nav-menu";
    }
}
menu.addEventListener("click", responsiveMenu);
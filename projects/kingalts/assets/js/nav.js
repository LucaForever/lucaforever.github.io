let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

sidebar.addEventListener("mouseenter", () => {
    sidebar.classList.add("open");
    menuBtnChange();
});

sidebar.addEventListener("mouseleave", () => {
    sidebar.classList.remove("open");
    menuBtnChange();
});

function menuBtnChange() {
    if(sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
}
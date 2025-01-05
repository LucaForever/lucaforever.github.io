const fragment = document.querySelector(".fragment");

for(let i = 1; i <= (7 * 7); i++) {
    let fr = document.createElement("div");
    fr.className = "fr";
    fr.style.background = "rgb(33, 33, 33, 0)"
    fragment.appendChild(fr);
}
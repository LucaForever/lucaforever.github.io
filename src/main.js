const resolution = 8;

const init = () => {
    const doc = document.querySelector(".render");

    const width = window.innerWidth;
    const height = window.innerHeight;

    const squareWidth = width / resolution;
    
    for(let i = 0; i < resolution; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.setProperty("width",`144`);

        doc.appendChild(square);
    }
}

init();
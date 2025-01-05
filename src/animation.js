var animation = anime
    .timeline({
        easing: "easeInOutExpo",
        direction: "alternate",
        loop: true,
        duration: 1500,
    })
    .add({
        targets: ".animate-box ",
        background: "#424242",
        borderRadius: ["10%", "50%"],
    }, 0)
    .add({ targets: ".sun-circle", fill: "#e9ebf6" }, 0)
    .add({ targets: ".sun-rays", stroke: "#424242" }, 0)
    .add({
        targets: ".moon-shadow",
        fill: "#424242",
        translateX: [108, 0],
        translateY: [-8, 0],
        scale: [0, 1],
    }, 0)
    .add({ targets: ".svg-container", rotate: [40, 0] }, 0)
    .add({ targets: ".scene", background: "#212121"}, 0)
    .add({ targets: ".fr", background: "rgb(75, 25, 75)", delay: anime.stagger(100, {grid: [7, 7], from: 'center'})})
    .add({ targets: ".fragment-bg", opacity: 1})
    .add({ targets: ".fr", opacity: 0, delay: anime.stagger(100, {grid: [7, 7], from: 'center'})});
const easing = getComputedStyle(document.documentElement).getPropertyValue('--bezier')

const scrollMul = 2.35
const translateMul = scrollMul - 2

let pos = window.scrollY
let atbottom = false

function preventDefault(e) {
    document.body.style.overflowY = atbottom ? "hidden" : "initial"
}

const scrollprojects = (e) => {
    if(window.innerWidth >= 992) {
        if((document.documentElement.clientHeight - 236) <= Math.floor(window.scrollY)) {
            const prj = document.querySelector(".project-wrapper")
            const projects = document.querySelectorAll(".project-wrapper > .project")

            const scrollDelta = e.wheelDeltaY * scrollMul
            const containerWidth = prj.offsetWidth * scrollMul * (projects.length - 1)

            pos -= (scrollDelta < 0 && pos >= containerWidth ? 0 : scrollDelta)
            
            let translate = Math.max(0, Math.min(pos * translateMul, containerWidth))
            prj.style.transform = `translateX(-${translate}px)`

            atbottom = translate > 0
        }

        preventDefault(e)
    } else {
        document.body.style.overflowY = "initial"
    }
}

window.onwheel = e => scrollprojects(e)
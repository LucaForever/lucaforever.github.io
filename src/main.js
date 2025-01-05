const dropdown = document.querySelector(".portfolio-drop")

const projects = document.querySelectorAll(".project-wrapper > .project").forEach(e => {
    const node = document.createElement("li")
    const content = document.createElement("a")

    content.textContent = e.children.item(1).textContent
    content.href = `#${e.id}`
    node.appendChild(content)

    dropdown.appendChild(node)
});
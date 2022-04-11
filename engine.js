function setTitle(title) {
    document.title = title;
    gameTitle.innerHTML = title;
}

function display(msg) {
    output.innerHTML = msg;
}

function addButton(name) {
    let button = document.createElement("button");
    button.innerHTML = name;
    button.onclick = () => handleClick(name);
    buttonContainer.appendChild(button);
}

function onLoad() {
    setup();
    tick();
}

function tick() {
    update();
    window.requestAnimationFrame(tick);
}

window.onload = onLoad;
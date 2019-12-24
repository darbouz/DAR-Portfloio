function quitMenu() {
    let menu = document.getElementById("menu");
    let foreground = document.getElementById("foreground");
    menu.style.transform = "translateX(10%)";
    foreground.style.zIndex = "-1";
    foreground.style.backgroundColor = "#0a0a0af8"

}


function openMenu() {
    let menu = document.getElementById("menu");
    let foreground = document.getElementById("foreground");
    menu.style.transform = "translateX(-100%)";
    foreground.style.zIndex = "999";
    foreground.style.backgroundColor = "#0a0a0ad0"
}

var activeE;
var icon = `<i class="fas fa-caret-right"></i> `;

function active(a) {
    inactive();
    a.innerHTML = icon + a.innerHTML;
    activeE = a;
}

function inactive() {
    if (activeE != undefined)
        activeE.innerHTML = activeE.innerHTML.substring(icon.length);
    activeE = undefined;
}
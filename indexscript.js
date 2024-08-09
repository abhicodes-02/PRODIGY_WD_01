function hover(x) {
    x.style.color = "white";
    x.style.backgroundColor = "grey";
    x.style.cursor = "pointer";
}

function noHover(x) {
    x.style.color = "white";
    x.style.backgroundColor = "transparent";
    x.style.textDecoration = "none";
}
function closeNav() {
    document.getElementById("menu").style.width = "0%";
}

function openNav() {
    document.getElementById("menu").style.width = "100%";
}
function myHome(x) {
    location.href = "#home"
}

function myAbout(x) {
    location.href = '#about';
}

function myServices(x) {
    location.href = '#services';
}

function myContact(x) {
    location.href = "#contact";
}

function mailOver(x) {
    x.style.textDecoration = "underline";
}

function mailOut(x) {
    x.style.textDecoration = "none";
    x.style.color = "000";
}


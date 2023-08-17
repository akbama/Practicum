document.addEventListener('DOMContentLoaded', function() {
    const leftBar = document.getElementById('leftBar');
    const openBar = document.getElementById('openBar');
    const mainContent = document.getElementById('mainContent');
    document.addEventListener('click', (event) => {
        if (!leftBar.contains(event.target) && !openBar.contains(event.target)) {
            leftBar.style.width = "0";
            mainContent.style.width = "100dvw";
        }
    });
});

function openBar() {
    const leftBar = document.getElementById('leftBar');
    const mainContent = document.getElementById('mainContent');
    if (leftBar.style.width === '0px') {
        leftBar.style.width = "60%";
        if (window.innerWidth >= 768) {
            mainContent.style.width = "calc(100% - 250px)";
        }
    }
}

function opencloseUnderNav() {
    const open = document.getElementById('underNav');
    const navBox2Active = document.querySelector('#navBox2.active');
    if (navBox2Active) {
        open.style.display = "block";
        document.getElementById('navBox 2').style.marginBottom = "1%";
    }
    else {
        if (open.style.display === "none") {
            open.style.display = "block";
            document.getElementById('navBox 2').style.backgroundColor = "#F5F5F5";
            document.getElementById('navBox 2').style.marginBottom = "1%";
        }
        else {
            open.style.display = "none";
            document.getElementById('navBox 2').style.backgroundColor = "none";
            document.getElementById('navBox 2').style.marginBottom = "4%";
        }
    }
}
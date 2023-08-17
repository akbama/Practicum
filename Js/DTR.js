document.addEventListener('DOMContentLoaded', function() {
    const leftBar = document.getElementById('leftBar');
    const openBar = document.getElementById('openBar');
    const rightSide = document.getElementById('rightSide');
    const menu = document.getElementById('menuBar');
    const reqContent = document.getElementById('reqContent');
    document.addEventListener('click', (event) => {
        if (!leftBar.contains(event.target) && !openBar.contains(event.target) && !menu.contains(event.target)) {
            leftBar.style.width = "0";
            rightSide.style.width = "100dvw";
        }
    });
    const navBox2Active = document.querySelector('.navBox2.active');
    const open = document.getElementById('underNav');
    if (navBox2Active) {
        open.style.display = "block";
        document.getElementById('navBox 2').style.marginBottom = "1%";
    }

    if (window.innerWidth >= 768) {}
    else {
        reqContent.style.width = "100dvw";
    }
    
});

function openBar() {
    const leftBar = document.getElementById('leftBar');
    const rightSide = document.getElementById('rightSide');
    const menu = document.getElementById('menuBar');
    const reqContent = document.getElementById('reqContent');
    if (leftBar.style.width === '0px') {
        leftBar.style.width = "60%";
        if (window.innerWidth >= 768) {
            rightSide.style.width = "calc(100% - 250px)";
        }
        else {
            reqContent.style.width = "100dvw";
        }
    }
}

function select (tabNumber) {
    // Reset all tabs to inactive
    const allTabs = document.querySelectorAll('.select');
    allTabs.forEach(tab => tab.classList.remove('active'));
    const selectedTab = document.querySelector(`.op${tabNumber}`);
    selectedTab.classList.add('active');
    // Activate the selected tab
    if (tabNumber == 1) {
        document.getElementById('leaveReq').style.display = "block";
        document.getElementById('clearListReq').style.display = "none";
        document.getElementById('uniformExReq').style.display = "none";
    }
    else if (tabNumber == 2) {
        document.getElementById('leaveReq').style.display = "none";
        document.getElementById('clearListReq').style.display = "block";
        document.getElementById('uniformExReq').style.display = "none";
    }
    else {
        document.getElementById('leaveReq').style.display = "none";
        document.getElementById('clearListReq').style.display = "none";
        document.getElementById('uniformExReq').style.display = "block";
    }
  }

function openReq () {
    const req = document.getElementById('menuBar');
    const arrow1 = document.getElementById('openReq')
    const arrow2 = document.getElementById('closeReq')
    req.style.display = "flex";
    arrow1.style.display = "none";
    arrow2.style.display = "block";
}

function closeReq () {
    const req = document.getElementById('menuBar');
    const arrow1 = document.getElementById('openReq')
    const arrow2 = document.getElementById('closeReq')
    req.style.display = "none";
    arrow1.style.display = "block";
    arrow2.style.display = "none";
}

  
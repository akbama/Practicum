function collapse() {
    var leftBarElement = document.getElementById("leftBar");
    var labelBoxElements = document.querySelectorAll("#labelBox");
    var collapseBarElement = document.getElementById("collapsebar");

    var screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
        if (leftBarElement.style.display === "none") {
            leftBarElement.style.display = "block";
            collapseBarElement.style.display = "none";
        }
        else {
            leftBarElement.style.display = "none";
            collapseBarElement.style.display = "block";
        }
    }
    
    else {
        if (leftBarElement.style.width === "5%") {
        leftBarElement.style.width = "60%";
        
        labelBoxElements.forEach(function(labelBox) {
            labelBox.style.display = "block";
        });
    } else {
        leftBarElement.style.width = "5%";
        
        labelBoxElements.forEach(function(labelBox) {
            labelBox.style.display = "none";
        });
    }
}
}

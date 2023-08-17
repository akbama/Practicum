function opencloseMessage (elem) {
    const messageTab = document.querySelector('.resultsContent.messageBox.'+ elem)
    const attachTab = document.querySelector('.resultsContent.attach.'+ elem)
    const replyTab = document.querySelector('.resultsContent.reply.'+ elem)
    if (messageTab.style.display === 'block') {
        messageTab.style.display = "none";
    }
    else {
        messageTab.style.display = "block";
        attachTab.style.display = "none";
        replyTab.style.display = "none";
    }
}

function openAttach (elem) {
    const messageTab = document.querySelector('.resultsContent.messageBox.'+ elem)
    const attachTab = document.querySelector('.resultsContent.attach.'+ elem)
    const replyTab = document.querySelector('.resultsContent.reply.'+ elem)
    if (attachTab.style.display === 'block') {
        attachTab.style.display = "none";
    }
    else {
        attachTab.style.display = "block";
        messageTab.style.display = "none";
        replyTab.style.display = "none";
    }
}

function openReply (elem) {
    const messageTab = document.querySelector('.resultsContent.messageBox.'+ elem)
    const attachTab = document.querySelector('.resultsContent.attach.'+ elem)
    const replyTab = document.querySelector('.resultsContent.reply.'+ elem)
    if (replyTab.style.display === 'block') {
        replyTab.style.display = "none";
    }
    else {
        replyTab.style.display = "block";
        attachTab.style.display = "none";
        messageTab.style.display = "none";
    }
}
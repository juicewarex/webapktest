function instagram() {
    document.getElementById('insta');
    let url = "https://www.instagram.com";
    let newWindow = window.open(url);
}

function telegram() {
    document.getElementById('tele');
    let url = "https://telegram.org/";
    let newWindow = window.open(url);
}

function twitter() {
    document.getElementById('twit');
    let url = "https://x.com"
    let newWindow = window.open(url);
}

let isFunctionRunning = false;

function zay() {
    if (isFunctionRunning) {
        return;
    }

    isFunctionRunning = true;

    let copytext = document.getElementById("Contact");
    let textToCopy = copytext.innerText;
    const dummyTextarea = document.createElement("textarea");

    document.body.appendChild(dummyTextarea);
    dummyTextarea.value = textToCopy;
    dummyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(dummyTextarea);

    let element = document.getElementById("Contact");
    element.textContent = "email kopiran";
    element.style.color = "#0d89eeff";

    setTimeout(function () {
        element.textContent = textToCopy;
        element.style.color = ""; 
        isFunctionRunning = false; 
    }, 1000); 
}



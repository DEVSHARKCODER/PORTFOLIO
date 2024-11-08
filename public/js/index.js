document.getElementById("hireme").addEventListener("click", function() {
    const messageElement = document.querySelector(".con-message");
    messageElement.classList.remove("slide-out-right");
    messageElement.classList.add("slide-in-right");

    
    setTimeout(function() {
        messageElement.classList.remove("slide-in-right");
        messageElement.classList.add("slide-out-right");
    }, 2000);
});

document.getElementById("supportme").addEventListener("click", function() {
    const messageElement = document.querySelector(".con-message");
    messageElement.classList.remove("slide-out-right");
    messageElement.classList.add("slide-in-right");

    
    setTimeout(function() {
        messageElement.classList.remove("slide-in-right");
        messageElement.classList.add("slide-out-right");
    }, 2000);
});

document.getElementById("sendMessage").addEventListener("click", function() {
    const messageElement = document.querySelector(".con-message");
    messageElement.classList.remove("slide-out-right");
    messageElement.classList.add("slide-in-right");

    
    setTimeout(function() {
        messageElement.classList.remove("slide-in-right");
        messageElement.classList.add("slide-out-right");
    }, 2000);
});


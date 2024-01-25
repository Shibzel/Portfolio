const discordTag = 'shibzel';
const noseZone = {
    minX: 63,
    minY: 140,
    maxX: 111,
    maxY: 185
};

document.getElementById('discord-logo').addEventListener('click',  function () {
    const tempInput = document.createElement('input');
    tempInput.value = discordTag;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const popupMessage = document.getElementById('popup-message');
    const copiedTagElement = document.getElementById('copied-tag');
    copiedTagElement.textContent = discordTag;
    popupMessage.style.opacity = '1';
    popupMessage.style.pointerEvents = 'auto';

    setTimeout(function () {
        popupMessage.style.opacity = '0';
        popupMessage.style.pointerEvents = 'none';
    }, 7000);
});

document.addEventListener("DOMContentLoaded", function () {
    var profileImage = document.querySelector(".profile-image");

    profileImage.addEventListener("click", function (event) {
        var nosePosition = profileImage.getBoundingClientRect();
        var x = event.clientX - nosePosition.left;
        var y = event.clientY - nosePosition.top;

        if (x >= noseZone.minX && x <= noseZone.maxX && y >= noseZone.minY && y <= noseZone.maxY) {
            var randomNumber = Math.floor(Math.random() * 100);
            var path = randomNumber === 0 ? "assets/sounds/metal-pipe.mp3" : "assets/sounds/honk.mp3";

            var audio = new Audio(path);
            audio.play();
        };
        console.log(x, y);
    });
});
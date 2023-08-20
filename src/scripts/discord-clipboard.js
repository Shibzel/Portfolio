document.getElementById('discord-logo').addEventListener('click', function () {
    const discordTag = 'shibzel';

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
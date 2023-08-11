document.addEventListener("DOMContentLoaded", function () {
    var profilImage = document.querySelector(".profile-image");

    profilImage.addEventListener("click", function (event) {
        var nosePosition = profilImage.getBoundingClientRect();
        var x = event.clientX - nosePosition.left;
        var y = event.clientY - nosePosition.top;

        var noseZone = {
            minX: 193,
            maxX: 230,
            minY: 57,
            maxY: 100
        };

        if (x >= noseZone.minX && x <= noseZone.maxX && y >= noseZone.minY && y <= noseZone.maxY) {
            var randomNumber = Math.floor(Math.random() * 100);
            var path = randomNumber === 0 ? "static/audio/metal-pipe.mp3" : "static/audio/honk.mp3";

            var audio = new Audio(path);
            audio.play();
        }
        else {console.log(x, y)}
    });
});

$(document).ready(function () {
    $("#respo").click(slideInAndOut);

    for (let i = 0; i <= 16; i++) {
        $('.img_grid').append(`<div class="img_wrap">
            <img src="img_small/sketch${i}.jpg" id="img${i}">
            <div class="overlay-number">${i+1}</div>
          </div>`);
    }

    $(".img_grid img").on("click", function () {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            this.requestFullscreen();
        } else {
            // Exit fullscreen
            document.exitFullscreen();
        }
    });

    $("a[href^='#']").click(function (e) {
        e.preventDefault(); // prevent default jump
        var target = $($(this).attr("href"));
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 200); // smooth scroll in 800ms
        }
    });
});

function slideInAndOut() {
    $("nav a").slideToggle(1000);}





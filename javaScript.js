$(document).ready(function () {
    $("#respo").click(slideInAndOut);

    loadImages();

    $(".img_grid img").on("click", openCloseFullScreen);


    $("a[href^='#']").on("click", scrollingSmoothToId);
});

function slideInAndOut() {
    $("nav a").slideToggle(1000);}

function loadImages() {
    $.getJSON("img_small/images.json")
        .done(function (data) {
            let number_of_images = data.length;

            for (let i = 0; i < number_of_images; i++) {
                $('.img_grid').append(`
                        <div class="img_wrap">
                            <img src="img_small/sketch${i}.jpg" id="img${i}">
                            <div class="overlay-number">${i + 1}</div>
                        </div>
                    `);
            }
        });
    }

function openCloseFullScreen(){
    if (!document.fullscreenElement) {
        // Enter fullscreen
        this.requestFullscreen();}
    else {
        // Exit fullscreen
        document.exitFullscreen();}
}

function scrollingSmoothToId(event) {
    event.preventDefault(); // prevent default jump
    var target = $($(this).attr("href"));
    if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 400); // smooth scroll in 400ms
    }
}
    




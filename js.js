// Using an object literal for a jQuery feature
var myFeature = {
    init: function () {
        $("#respo_menu").click(this.openNav);
        this.loadImages();
        $(".gallery").on("click", "img", function () {
            myFeature.fullScreenImage.call(this);
        });
        
    },
    openNav: function () {
        $("header nav").slideToggle();
    },
    loadImages: function () {
        $.getJSON('media/images.json', function (images) {
            $.each(images, function (index, image) {
                $('.gallery').append(`<img src="media/${image}" alt="One sketch shown on website">`);
            });
        });
    },



    fullScreenImage: function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            const elem = this;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }

    },

};

$(document).ready(function () {
    myFeature.init();
});

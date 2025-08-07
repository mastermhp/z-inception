$(document).ready(function () {
    var homeSlider = $("#home-slider").owlCarousel({
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__slideInDown',
        loop: true,
        autoplay: true,
        items: 1,
        dots: true,
        dotsData: true,
        autoplayHoverPause:true
    });

    var homeFeaturedGameSlider = $('#home-featured-game-slider').owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        dots: true,
        dotsData: true,
        autoplayHoverPause:true
    });

    var blogSlider = $("#blog-slider").owlCarousel({
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__slideInDown',
        loop: true,
        autoplay: false,
        items: 1,
        dots: true,
        dotsData: true,
        autoplayHoverPause:true
    });

    var gameSlider = $("#game-slider").owlCarousel({
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__slideInDown',
        loop: true,
        autoplay: false,
        items: 1,
        dots: true,
        dotsData: true,
        autoplayHoverPause:true
    });
    
    var gameSlider1 = $(".games-game-slider").owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        dots: true,
        dotsData: true,
        autoplayHoverPause:true
    });
});

$(document).ready(function() {
    $('.owl-dot button').hover(
        function() {
            $(this).click();
        }
    );
});

document.addEventListener('DOMContentLoaded', function () {
    var policyBlock = document.getElementById('policyBlock');
    var acceptButton = document.getElementById('acceptButton');
    var declineButton = document.getElementById('declineButton');

    var isAccepted = localStorage.getItem('privacyAccepted');

    if(policyBlock != null) {
        if (isAccepted) {
            policyBlock.style.display = 'none';
        } else {
            acceptButton.addEventListener('click', function () {
                // alert('Privacy policy accepted!');
                localStorage.setItem('privacyAccepted', true);
                policyBlock.style.display = 'none';
            });

            declineButton.addEventListener('click', function () {
                // alert('Privacy policy declined!');
                policyBlock.style.display = 'none';
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var eighteenBlockIsAccepted = localStorage.getItem('eighteenBlockIsAccepted');

    if(eighteenBlockIsAccepted) {

    } else {
        $('#staticBackdrop').modal('show');
        $('#accept18').click(function() {
            localStorage.setItem('eighteenBlockIsAccepted', true);
            $('#staticBackdrop').modal('hide');
        });
    }
});

var elements = document.querySelectorAll('.blog-grid-item');
var maxHeight = 0;
elements.forEach(function (element) {
    maxHeight = Math.max(maxHeight, element.clientHeight);
});
elements.forEach(function (element) {
    element.style.height = maxHeight + 'px';
});
$(document).ready(function () {

    //button to scrool top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
        if ($(this).scrollTop() > 150) {
            $('#main-nav').fadeIn(500);
        } else {
            $('#main-nav').fadeOut(500);
        }
    });
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    //smooth scrool effect
    $('a').click(function(){    //take all a tags in doc
        if (this.hash !=="") {  // if hash is not empty do stuff
            event.preventDefault();    
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },800, function() {
                window.location.hash = hash;
            });
        }   //end of if 
    });
});


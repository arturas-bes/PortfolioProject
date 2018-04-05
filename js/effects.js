
$(document).ready(function () {
    //window.load brings an error
    $(window).on('load', function () { 
        $(".loadingScreen").fadeOut("slow");
    });
});
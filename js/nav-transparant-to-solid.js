$(document).ready(function() {
    // Transition effect for navbar
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 232) {
            // $('.navbar').addClass('bg-white-blur');
            $('.navbar').removeClass('bg-transparent');
        } else {
            // $('.navbar').removeClass('bg-white-blur');
            $('.navbar').addClass('bg-transparent');
        }
    });
});
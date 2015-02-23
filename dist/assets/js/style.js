jQuery(document).ready(function($) {

    /*=======================================================
    =            \o/ le me open that sidebar \o/            =
    =======================================================*/
        
    $('#show-sidebar').click(function() {
        $('body').toggleClass('open-sidebar');
        $('.sidebar').toggleClass('show');
        $(this).find('i').toggleClass('fa-bars').toggleClass('fa-times');
    });





    /*=======================================================
    =            \o/ le me open that comment \o/            =
    =======================================================*/
    
    $('#show-comment').click(function() {
        $('.comment-form').toggleClass('comment-form-open');
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 350);
    });

    var hash = window.location.hash;
    if (hash == '#respond') {
        $('.comment-form').addClass('comment-form-open');
        $('html, body').animate({
            scrollTop: $('#show-comment').offset().top
        }, 350);
    }
    
    



    /*=======================================================
    =            Click on the #infinite .section            =
    =======================================================*/

    var open_section = function() {
        $('#infinite .section').click(function() { window.location.href = $(this).find('.section-title > a').attr('href'); });
    }

    open_section();

    $( document.body ).on( 'post-load', function () {
        open_section();
    } );
    
    
});
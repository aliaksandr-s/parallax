var pContainerHeight = $('.bird-box').height();

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();


    // Header
    if (wScroll <= pContainerHeight){
        $('.logo').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)'
        });
        $('.back-bird').css({
            'transform': 'translate(0px, ' + wScroll / 4 + '%)'
        });
        $('.fore-bird').css({
            'transform': 'translate(0px, -' + wScroll / 37 + '%)'
        });
    }
    //Slide photos
    if (wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

        $('.clothes-pics figure').each(function(i) {

            setTimeout(function() {
                $('.clothes-pics figure').eq(i).addClass('is-showing');
            }, (700 * (Math.exp(i * 0.14))) - 700);
        });
    } else if (wScroll < $('.clothes-pics').offset().top - ($(window).height())) {
        $('.clothes-pics figure').removeClass('is-showing');
    }

    // Promoscope
    if (wScroll > $('.large-window').offset().top - $(window).height()) {
        $('.large-window').css({
            'background-position': 'center ' + (wScroll - $('.large-window').offset().top) + 'px'
        })

        var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5)

        $('.window-tint').css({
            'opacity': opacity
        })
    }

    // blog-posts
    if (wScroll > $('.blog-posts').offset().top - $(window).height()) {
        var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350);

        $('.post-1').css({
            transform: 'translate(' + offset + 'px, ' + -(offset) * 0.3 + 'px)'
        });
        $('.post-2').css({
            transform: 'translate( 0,' + offset / 5 + 'px)'
        });
        $('.post-3').css({
            transform: 'translate(' + -(offset) + 'px, ' + -(offset) * 0.3 + 'px)'
        });
    };
});

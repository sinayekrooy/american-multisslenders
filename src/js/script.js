var flag = true;

$(window).scroll(function() {
    var hT = $('#status').offset().top,
        hH = $('#status').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (flag && wS > (hT+hH-wH)){
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        flag = false;
    }
 });
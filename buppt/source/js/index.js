$(document).ready(function () {
        $("#gotop").hide();
        $(function () {
            $(window).scroll(function () {
                if($(this).scrollTop()>1){
                    $("#gotop").fadeIn();
                } else {
                    $("#gotop").fadeOut();
                }
            })
        });
        $('#gotop').click(function () {
            $('html,body').animate({scrollTop: '0px'}, 800);
        });
    });

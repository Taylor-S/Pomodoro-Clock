$(document).ready(function(){
    $('.tab').click(function(){

        if ($('.tab').css('top') == '245px') {
            $(this).css('top', '-5px');
            $('.instructions .content, .instructions h1').fadeOut(1000);
            $('.underlay').fadeOut(1000);
        }
        else {
            $(this).css('top', '245px')
            $('.instructions .content, .instructions h1').fadeIn(500);
            $('.underlay').fadeIn(1000);
        }

        if ($('.instructions').css('top') == '-20px') {
            $('.instructions').css('top', '-265px');
        }
        else {
            $('.instructions').css('top', '-20px')
        }

        // $('.instructions').css('top', '-265px');
    });
});

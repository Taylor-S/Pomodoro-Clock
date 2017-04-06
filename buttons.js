$(document).ready(function(){


    $('.plusBreak').click(function(){
        $('.breakTime').html(addOne(parseInt($(".breakTime").html())));
        breakTime = parseInt($('.breakTime').html());
    });
    $('.minusBreak').click(function(){
        $('.breakTime').html(minusOne(parseInt($(".breakTime").html())));
        breakTime = parseInt($('.breakTime').html());
    });

    $('.plusStudy').click(function(){
        $('.studyTime').html(addOne(parseInt($(".studyTime").html())));
        if (!$('.toggle').hasClass('started')) {
            // change time
            $('.time').html($('.studyTime').html() + ":00");
        }
        // update variable//////
        studyTime = parseInt($('.studyTime').html());

    });
    $('.minusStudy').click(function(){
        $('.studyTime').html(minusOne(parseInt($(".studyTime").html())));
        if (!$('.toggle').hasClass('started')) {
            // change time
            $('.time').html($('.studyTime').html() + ":00");
        }
        // update variable//////
        studyTime = parseInt($('.studyTime').html());

    });


    $('.toggle').click(function(){
        // timer started counting down
        $(this).addClass('started');

        // switch between start and pause
        if ($(this).hasClass('active')) {
            $('.start').css("display", "none");
            $('.pause').css("display", "block");
            $(this).removeClass('active')
        }
        else {
            $('.pause').css("display", "none");
            $('.start').css("display", "block");
            $(this).addClass('active')
        }
    });




    // reset///////////////
    $('.resetButton').click(function(){

        // remove checkmarks
        $('.check').css('background-image', 'url()');

        // Removes started class and button reads START
        $('.toggle').removeClass('started').addClass('active');
        $('.pause').css("display", "none");
        $('.start').css("display", "block");

        timeReset();
    });
});






////////////////////////////////////////////////////////////////////////
function addOne(num){
    if (num === 60) {
        return 1;
    }
    return num+1;
}

function minusOne(num){
    if (num === 1) {
        return 60;
    }
    return num-1;
}

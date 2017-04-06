// Variables/////////////////////////////////

// Program running
var run = false,

// Decision Maker
picker = 1,

// check counter
count = 1,

// times
studyTime,
breakTime,

// alarm
audio = new Audio();
audio.src = "./tones.mp3";
//////////////////////////////////////////////




//////////////////////////////////////////////

$(document).ready(function(){

    // set timer to study time
    $('.time').html($('.studyTime').html() + ":00");






    // pause timer function
    $('.toggle').click(function(){
        var pauseTime = [];
        if (run === true) {
            run = false
        }else {
            run = true;

            // restart timer with paused time
            pauseTime = $('.time').html().split(":");
            toSeconds(parseInt(pauseTime[0]), parseInt(pauseTime[1]));
        }


    });


});

//////////////////////////////////////////////







// Timer///////////////////////////////////////////////////////////////

function countDown(time){

    // timer counts down if run is true
    if (run === true) {

        timerHeadDis ();

        // convert time from seconds to minutes and round down to nearest
        // 1. E.G. 80 seconds (1:20) is equal to 1.333333333, minutes = 1
        var minutes = Math.floor(time/60);

        // convert the seconds in decimal point form to readable seconds.
        // E.G. 1.333333333 - 1 = 0.333333333. Then 0.333333333 * 60 is equal to 19.99999998.
        // Round to nearest whole number which is equal to 20.
        var seconds = Math.round((time/60 - (Math.floor(time/60)))*60);

        // if seconds or minutes is less than 2 digits long, add a 0 in front.
        // E.G. 01:05 minutes
        if (minutes < 10) {
            minutes = "0"+minutes;
        }
        if (seconds < 10) {
            seconds = "0"+seconds;
        }


        // console.log(minutes + ":" +seconds);
        $('.time').html(minutes + ":" +seconds);
        if (time >= 0) {
            // console.log(time/60);
            setTimeout(function(){
                countDown(time-1);
            }, 1000);

        }

        // when the timer reaches zero, the function recall picks the next appropiate time to
        // count down from. Also sound an alarm.
        else {
            audio.play();
            recall();
        }

    }

}






/////////////////////////////////////////////////////////////////////////////////////////////////////////
// function to put time notation into seconds. 01:20 = 80 seconds, then calls upon
// countdown timer
function toSeconds(min, sec){
    var totalSeconds;
    if (min === 0) {
        totalSeconds = sec
        return countDown(totalSeconds);
    }
    totalSeconds = (min*60)+sec;
    return countDown(totalSeconds);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Recall function has a picker variable which decides between
// breakTime of studyTime. 1 = study, 2 = break


function recall() {
    if (picker === 1) {
        picker = 2;

        // Check marks
        if (count <=4) {
            $('.check'+count).css('background-image', 'url("./tick.png")');
            count ++;
        }


        toSeconds(breakTime, 0);
    }
    else {
        picker = 1;


        // When check marks reaches 4, restart
        if (count > 4) {
            $('.check').css('background-image', 'url()');
            count = 1;
        }

        toSeconds(studyTime, 0);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////

// timeBox Heading///////////////////////////////////////
// uses picker to shoose which heading to display

function timerHeadDis () {
    if (picker == 1) {
        $('.timeType h2').html("SESSION")
    }
    else {
        $('.timeType h2').html("BREAK")
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////


// reset function//////////////////////////////////////////////////////////////////////////////////////

function timeReset() {
    // heading back to time
    $('.timeBox h2').html("TIME");


    run = false;
    picker = 1;

    // set timer to study time
    $('.time').html($('.studyTime').html() + ":00");

}

var startTime = new Date();

$(function() {

    function countdown() {
        var currentTime = startTime.getTime();
        var rightNow = new Date();
        var sec = Math.floor((rightNow.getTime() - startTime.getTime()) / 1168);

        sec = (sec < 10) ? "0" + sec : sec;

        $('.seconds').text(sec);

        setTimeout(countdown, 1000);
    }

    countdown();
});


var currentTime = function () {
    var clockTime = new Date();
    var clockHere = document.getElementById('clockHere');
    var hours = clockTime.getHours();
    var minutes = clockTime.getMinutes();
    var seconds = clockTime.getSeconds();
    var AmPm = 'AM';
    if (hours > 12) {
        AmPm = 'PM';
        hours = hours - 12;
    }
    var clock = hours + ':' + minutes + ':' + seconds + ' ' + AmPm + '!!';
    clockHere.innerText = clock;
    // console.log(clock);
};
var updateTime = function () {
    currentTime();
};
updateTime();
var oneSecond = 1000;
setInterval(updateTime, oneSecond);
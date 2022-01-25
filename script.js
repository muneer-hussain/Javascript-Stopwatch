var hours = 00;
var mins = 00;
var sec = 00;
var count = 00;

function twoDigits(n) {
    if (n < 10)
        return '0' + n;
    return n;
}


var timer = false;

// function for  start button 

function start() {
    timer = true;
    stopwatch()
};

// function for stop button

function stop() {
    timer = false
};

// function for reset button
function reset() {
    timer = false;
    // redeclearing values for reset 
    count = 0;
    hours = 0;
    mins = 0;
    sec = 0;

    document.getElementById("count").innerHTML = "0" + count;
    document.getElementById("sec").innerHTML = "0" + sec
    document.getElementById("min").innerHTML = "0" + mins;
    document.getElementById("hour").innerHTML = "0" + hours;

};


// main function for stopwatch
function stopwatch() {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1
            count = count = 0
        }
        document.getElementById("sec").innerHTML = `${twoDigits (sec)}`;


        if (sec == 60) {
            mins = mins + 1
            sec = sec = 0
        }
        document.getElementById("min").innerHTML = `${twoDigits(mins)}`;

        if (mins == 60) {
            hours = hours + 1
            mins = mins = 0
        }
        document.getElementById("hour").innerHTML = `${twoDigits (hours)}`;


        document.getElementById("count").innerHTML = `${twoDigits (count)}`;
        setTimeout("stopwatch()", 10)
    };
};
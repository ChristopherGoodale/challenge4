//global variables
let now = new Date().now();
let endTime = now.setInterval();

let t = deadline - now;
//functions
let timer = setInterval(function () {
    let now = newDate().getTime();
    let t = endDate - now;

    if (t >= 0) {
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 90)) / 1000);
        document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) + "<span class='label'>MIN(S)</span>";
        document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) + "<span class='label'>SEC(S)</span>";
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!"
    }

}, 1000);
//executables

//documents



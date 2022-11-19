//global variables
let deadline = new Date().getTime(30000);

let now = new Date().getTime();
let t = deadline - now;
//functions
let timer = setInterval(function () {

}, 1000);
//executables

//documents
document.getElementById("timer-days").innerHTML = days + "<span class='label'>DAY(S)</span>";
document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) + "<span class='label'>HR(S)</span>";
document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) + "<span class='label'>MIN(S)</span>";
document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) + "<span class='label'>SEC(S)</span>";


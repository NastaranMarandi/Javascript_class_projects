const seconds=1*1000;
const minutes = 1000 * 60;
const hours = minutes * 60;
const days = hours * 24;
const years = days * 365;
function timeDistance(){
let firstTime = new Date(91, 0, 0).getTime();
let Now = new Date().getTime();
let timeInterval = Math.round((Now - firstTime) / years);
document.getElementById('showDate').innerHTML = timeInterval+" Years has passed.";
let year = Math.round((Now - firstTime) / years);
let day = Math.round((Now - firstTime) / days);
let hour = Math.round((Now - firstTime) / hours);
let minute = Math.round((Now - firstTime) / minutes);
let second = Math.round((Now - firstTime) / seconds);
document.getElementById('timeDistance').innerHTML = "Since start of JavaScript until now " + year + " year and " + day + " day and " + hour +
    " hour and " + minute + " minutes and " + second+" seconds has passed."
}
 setInterval(function () { timeDistance() }, 1000);

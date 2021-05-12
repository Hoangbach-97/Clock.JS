function showTimer() {
var data = new Date();
var hour = data.getHours();
var minute = data.getMinutes();
var second = data.getSeconds();
// var showSession = "AM";



hour = (hour<10) ? "0"+hour : hour;
minute = (minute<10) ? "0"+minute : minute;
second = (second<10) ? "0"+second : second;
var showSubTimer = hour + ":" + minute + ":" + second;

document.getElementById("timer").innerHTML=showSubTimer;
setTimeout(showTimer, 1000);
}
showTimer();
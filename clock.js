window.addEventListener('load', calClock);

function calClock () {
let day    = document.getElementById("day");
let hour   = document.getElementById("hour");
let minute = document.getElementById("minute");
let sec    = document.getElementById("sec");

const date = new Date();

let week = date.getDay();

if(week == 0) day.innerHTML = "SUN : ";
if(week == 1) day.innerHTML = "MON : ";
if(week == 2) day.innerHTML = "TUE : ";
if(week == 3) day.innerHTML = "WED : ";
if(week == 4) day.innerHTML = "TUR : ";
if(week == 5) day.innerHTML = "FRI : ";
if(week == 6) day.innerHTML = "SAT : ";


hour.innerHTML   = (date.getHours()+"h : ");
minute.innerHTML = (date.getMinutes()+"m : ");
sec.innerHTML    = (date.getSeconds()+"s")
	

setTimeout(calClock, 200);
}

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');




appDiv.innerHTML = `<h1>JS Starter</h1> </br>`;

function updateTime() {
const hrSpan = document.getElementById('hour');

const minSpan = document.getElementById('minute');

const secSpan = document.getElementById('seconds');

  const date = new Date();
  hrSpan.innerHTML = date.getHours();
  minSpan.innerHTML = date.getMinutes();
  secSpan.innerHTML = date.getSeconds();

}

function update12hrFormatTime () {
const hrSpan12 = document.getElementById('12hour');

const minSpan12 = document.getElementById('12minute');

const secSpan12 = document.getElementById('12seconds');

  const date = new Date();
  var hr = date.getHours();
  const format = document.getElementById('format');

  const isPm = (hr >= 12) ? true : false;
  if (isPm) {
    hr = hr % 12;
    format.innerHTML = 'PM';
  } else {
    format.innerHTML = 'AM';
  }
  hrSpan12.innerHTML = hr;
  minSpan12.innerHTML = date.getMinutes();
  secSpan12.innerHTML = date.getSeconds();
  

}

setInterval(updateTime, 1000);

setInterval(update12hrFormatTime, 1000);

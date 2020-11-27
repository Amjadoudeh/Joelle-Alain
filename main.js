// The Target date 
const newYears = '1 Jan 2021';

// connecting HTML with JS code 
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// a function just to show the 00 when the time under 10 :)
function formatTime(time) {
  return time < 10 ? '0' + time : time
}

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  // console.log(newYearsDate - currentDate);
  // calculating the total seconds
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  // calculating the days
  const days = Math.floor(totalSeconds / 3600 / 24);
  // calculating the hours
  const hours = Math.floor(totalSeconds / 3600) % 24;
  // calculating the minutes 
  const mins = Math.floor(totalSeconds / 60) % 60;
  // calculating the seconds 
  const seconds = Math.floor(totalSeconds % 60);
  // seeing the result 
  //console.log(days, hours, mins, seconds);

  // showing the Result on the HTML page
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}



//initial call
countdown();
setInterval(countdown, 1000);

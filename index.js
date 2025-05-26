const targetDate = new Date("May 31 2025 00:00:00").getTime();

function countdown() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  let days = Math.floor(distance / 1000 / 60 / 60 / 24);
  let hours = Math.floor(distance / 1000 / 60) % 24;
  let minutes = Math.floor(distance / 1000 / 60) % 60;
  let seconds = Math.floor(distance / 1000) % 60;

  if (days < 10) {
    days = `0${days}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (distance <= 0) {
    days.innerHTML = "0";
    hours.innerHTML = "0";
    minutes.innerHTML = "0";
    seconds.innerHTML = "0";
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
setInterval(countdown, 1000);

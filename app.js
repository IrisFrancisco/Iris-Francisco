const weddingDate = new Date("2023-08-26T11:30:00");
const daysCounter = document.querySelector("#days");
const hoursCounter = document.querySelector("#hours");
const minutesCounter = document.querySelector("#minutes");
const secondsCounter = document.querySelector("#seconds");

function countdownTimer() {
  let currDate = new Date();

  // get total seconds between the times
  let delta = Math.abs(weddingDate - currDate) / 1000;

  // calculate (and subtract) whole days
  let days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  let hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  let minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  let seconds = Math.floor(delta % 60); // in theory the modulus is not required

  //console.log(days, hours, minutes, seconds)
  daysCounter.innerText = days;
  hoursCounter.innerText = hours;
  minutesCounter.innerText = minutes;
  secondsCounter.innerText = seconds;
}

countdownTimer();
setInterval(countdownTimer, 1000);

//const currDate = new Date();

//const daysToWedding = daysBetween(currDate,weddingDate);
//let auxDate = addDays(currDate, daysToWedding)

//let hours = Math.abs(weddingDate - auxDate) / (60*60*1000);
//auxDate = addDays(auxDate, (hours/24))

// minutes and seconds are wrong. Needs to add hours the same way days were added
//let minutes = Math.abs(weddingDate - auxDate) / (60*1000);
//let seconds = Math.abs(weddingDate - auxDate) / 1000;
//console.log(daysToWedding, hours, minutes, seconds);

let isShowIban = false;

function handleViewIban() {
  if (!isShowIban) {
    const text = "PT50 0023 0000 45685404933 94";
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.classList.add("text-center", "m-3");
    var element = document.getElementById("gifts");
    element.appendChild(paragraph);
    isShowIban = true;
  }
}

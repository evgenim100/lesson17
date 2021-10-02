window.addEventListener('DOMContentLoaded', function(){
'use strict';
const timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds'),
      deadline = '01 july 2022';

function addZero(number){
  number = String(number);
  if (number.length === 1){
    number = '0' + number;
  };
return number;
};


function getTimeRemaining(deadline){
  let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000;
      if (timeRemaining > 0){
      let   seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60) / 60);
      return {hours, minutes, seconds, timeRemaining};
      } else {
      let   seconds = '00',
            minutes = '00',
            hours = '00';
            clearInterval(startTimer);
      return {hours, minutes, seconds, timeRemaining};
      }
};

function updateClock(){
  let timer = getTimeRemaining(deadline);
  timerHours.textContent = addZero(timer.hours);
  timerMinutes.textContent = addZero(timer.minutes);
  timerSeconds.textContent = addZero(timer.seconds);
};

let startTimer = setInterval(updateClock, 1000);

});
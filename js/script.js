import { CountdownTimer } from './classTimer.js';

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
  onTick: refreshTimerMarkup,
});

const timerEl = document.querySelector(timer1.selector);

const refs = {
  daysEl: timerEl.querySelector('[data-value="days"]'),
  hoursEl: timerEl.querySelector('[data-value="hours"]'),
  minsEl: timerEl.querySelector('[data-value="mins"]'),
  secsEl: timerEl.querySelector('[data-value="secs"]'),
};

function refreshTimerMarkup(timer) {
  const { days, hours, mins, secs } = timer;
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = addZerro(hours);
  refs.minsEl.textContent = addZerro(mins);
  refs.secsEl.textContent = addZerro(secs);
}

function addZerro(value) {
  return value < 10 ? '0' + value : value;
}

timer1.start();
